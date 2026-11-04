/**
 * GitHub Pages SPA: unknown paths serve 404.html → redirect to /BASE/?/route
 * @see https://github.com/rafgraph/spa-github-pages
 */
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const distDir = process.argv[2] ? join(root, process.argv[2]) : join(root, 'dist')

/** Path segments to keep (user.github.io/REPO/ → 1) */
const PATH_SEGMENTS_TO_KEEP = 1

const html = `<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>AVEON</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = ${PATH_SEGMENTS_TO_KEEP};
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body></body>
</html>
`

writeFileSync(join(distDir, '404.html'), html, 'utf8')
console.log('Wrote SPA 404.html →', join(distDir, '404.html'))
