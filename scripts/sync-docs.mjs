/**
 * Copy Vite dist/ → docs/ (optional /docs Pages folder).
 */
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')
const docs = join(root, 'docs')

export function syncDocsFromDist(distDir = dist, projectRoot = root) {
  const docsDir = join(projectRoot, 'docs')
  rmSync(docsDir, { recursive: true, force: true })
  mkdirSync(docsDir, { recursive: true })
  cpSync(distDir, docsDir, { recursive: true })
  writeFileSync(join(docsDir, '.nojekyll'), '')

  const notFound = join(distDir, '404.html')
  if (existsSync(notFound)) {
    cpSync(notFound, join(docsDir, '404.html'))
  } else {
    cpSync(join(docsDir, 'index.html'), join(docsDir, '404.html'))
  }
}

/** Built files at repo root for Pages: branch web, folder /(root) */
export function syncWebRootFromDist(distDir = dist, projectRoot = root) {
  const index = join(distDir, 'index.html')
  const notFound = join(distDir, '404.html')
  if (!existsSync(notFound) && existsSync(index)) {
    cpSync(index, notFound)
  }

  cpSync(index, join(projectRoot, 'index.html'))
  cpSync(notFound, join(projectRoot, '404.html'))

  const assetsDir = join(projectRoot, 'assets')
  rmSync(assetsDir, { recursive: true, force: true })
  cpSync(join(distDir, 'assets'), assetsDir, { recursive: true })

  for (const name of readdirSync(distDir)) {
    if (name === 'assets') continue
    const src = join(distDir, name)
    if (statSync(src).isFile()) {
      cpSync(src, join(projectRoot, name))
    }
  }

  const distFavicon = join(distDir, 'favicon.svg')
  const outFavicon = join(projectRoot, 'favicon.svg')
  if (existsSync(distFavicon)) {
    cpSync(distFavicon, outFavicon)
  } else if (existsSync(join(projectRoot, 'public/favicon.svg'))) {
    cpSync(join(projectRoot, 'public/favicon.svg'), outFavicon)
  }

  writeFileSync(join(projectRoot, '.nojekyll'), '')
  syncDocsFromDist(distDir, projectRoot)
}

if (process.argv[1]?.replace(/\\/g, '/').endsWith('sync-docs.mjs')) {
  syncDocsFromDist()
  console.log('Synced dist → docs/')
}
