/**
 * Push production build to `web` branch root (GitHub Pages: web / root).
 * Run from `main` after `npm run build`. Does not change `main`.
 */
import { execSync } from 'node:child_process'
import { cpSync, existsSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { syncWebRootFromDist } from './sync-docs.mjs'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')
const backup = join(root, '.deploy-dist')

const remote =
  process.env.DEPLOY_REMOTE || (process.env.GITHUB_ACTIONS === 'true' ? 'origin' : 'github')

function run(cmd) {
  execSync(cmd, { cwd: root, stdio: 'inherit' })
}

if (!existsSync(dist)) {
  console.error('Missing dist/. Run: npm run build')
  process.exit(1)
}

rmSync(backup, { recursive: true, force: true })
cpSync(dist, backup, { recursive: true })

const branch = execSync('git rev-parse --abbrev-ref HEAD', { cwd: root }).toString().trim()
if (branch !== 'main') {
  console.error(`Expected branch main, on ${branch}`)
  process.exit(1)
}

run(`git fetch ${remote} web`)
run('git checkout web')
run(`git reset --hard ${remote}/main`)

cpSync(backup, dist, { recursive: true })
syncWebRootFromDist(dist, root)

run(
  'git add index.html 404.html assets .nojekyll favicon.svg docs og-share.png',
)
try {
  run('git commit -m "chore: publish site to web branch root [skip ci]"')
} catch {
  console.log('No changes to commit on web')
}
run(`git push --force-with-lease ${remote} web`)
run('git checkout main')

rmSync(backup, { recursive: true, force: true })
console.log('Published to origin/web (Pages root)')
