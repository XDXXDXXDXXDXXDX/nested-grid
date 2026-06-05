import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const PACKAGES = ['packages/core', 'packages/react', 'packages/react-cards']

// 0. Pre-check
console.log('Checking types...')
execSync('pnpm typecheck', { cwd: ROOT, stdio: 'inherit' })

// 1. Bump versions
console.log('\nBumping versions...')
const bumps = []
for (const pkg of PACKAGES) {
  const file = resolve(ROOT, pkg, 'package.json')
  const json = JSON.parse(readFileSync(file, 'utf-8'))
  const old = json.version
  const [major, minor] = json.version.split('.').map(Number)
  json.version = `${major}.${minor + 1}.0`
  writeFileSync(file, JSON.stringify(json, null, 2) + '\n')
  bumps.push({ name: json.name, old, new: json.version })
  console.log(`  ${json.name}: ${old} → ${json.version}`)
}

// 2. Build
console.log('\nBuilding...')
execSync('pnpm build', { cwd: ROOT, stdio: 'inherit' })

// 3. Commit + tag + push
const tag = bumps.map((b) => `${b.name}@${b.new}`).join(', ')
console.log(`\nCommitting: ${tag}`)
execSync('git add packages/*/package.json docs/', { cwd: ROOT, stdio: 'inherit' })
execSync(`git commit -m "release: ${tag}"`, { cwd: ROOT, stdio: 'inherit' })
execSync(`git tag -a "v${bumps[0].new}" -m "${tag}"`, { cwd: ROOT, stdio: 'inherit' })
console.log('Pushing...')
execSync('git push --follow-tags', { cwd: ROOT, stdio: 'inherit' })

// 4. Publish
console.log('\nPublishing...')
for (const pkg of PACKAGES) {
  execSync('pnpm publish --access public --no-git-checks', {
    cwd: resolve(ROOT, pkg),
    stdio: 'inherit',
  })
}

console.log('\nDone.')
