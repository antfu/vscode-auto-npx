import { platform } from 'os'
import { window, workspace } from 'vscode'

const isWindows = platform() === 'win32'

const COMMAND = isWindows
  ? '$env:PATH = "{0}\node_modules\.bin;{1}" -f (Resolve-Path .), $env:PATH'
  : 'export PATH=$PWD/node_modules/.bin:$PATH'

function setup() {
  window.terminals.forEach(async(t) => {
    if (await t.processId)
      return
    t.sendText(COMMAND)
  })
  window.onDidOpenTerminal((t) => {
    t.sendText(COMMAND)
  })
}

export async function activate() {
  if (workspace.isTrusted)
    setup()
  else
    workspace.onDidGrantWorkspaceTrust(setup)
}

export function deactivate() {}
