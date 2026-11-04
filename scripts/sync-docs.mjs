/**
 * Copy Vite dist/ → docs/ for GitHub Pages (main branch, /docs folder).
 */
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')
const docs = join(root, 'docs')

rmSync(docs, { recursive: true, force: true })
mkdirSync(docs, { recursive: true })
cpSync(dist, docs, { recursive: true })
writeFileSync(join(docs, '.nojekyll'), '')

const notFound = join(dist, '404.html')
if (existsSync(notFound)) {
  cpSync(notFound, join(docs, '404.html'))
} else {
  cpSync(join(docs, 'index.html'), join(docs, '404.html'))
}

console.log('Synced dist → docs/')
