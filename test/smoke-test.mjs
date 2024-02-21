import test from 'tape'
import url from 'url'
import path from 'path'
import sandbox from '@architect/sandbox'
import { get } from 'tiny-json-http'

const baseUrl = 'http://localhost:3333'
const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

test(`Start local server`, async t => {
  await sandbox.start({ quiet: true, cwd: path.join(__dirname, 'mock-app') })
  t.pass('local server started')
  t.end()
})

test('Root responds', async t => {
  const response = await get({ url: baseUrl })
  t.ok(response.body, 'We got a response')
  t.end()
})

test(`Stop Sandbox`, async t => {
  await sandbox.end()
  t.pass('Server Stopped')
  t.end()
})
