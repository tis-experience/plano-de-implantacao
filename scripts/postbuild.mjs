import fs from 'fs'
import path from 'path'

const distDir = path.resolve('dist')
const devHtml = path.join(distDir, 'index.dev.html')
const prodHtml = path.join(distDir, 'index.html')

if (!fs.existsSync(devHtml)) {
  if (fs.existsSync(prodHtml)) process.exit(0)
  throw new Error('dist/index.dev.html not found after build')
}

let html = fs.readFileSync(devHtml, 'utf8')
const assetsDir = path.join(distDir, 'assets')

for (const file of fs.readdirSync(assetsDir)) {
  if (!file.includes('index.dev-')) continue
  const renamed = file.replace(/^index\.dev-/, 'index-')
  fs.renameSync(path.join(assetsDir, file), path.join(assetsDir, renamed))
  html = html.split(file).join(renamed)
}

fs.writeFileSync(prodHtml, html)
fs.unlinkSync(devHtml)
