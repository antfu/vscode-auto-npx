import { platform } from 'os'
import { window, workspace } from 'vscode'

const isWindows = platform() === 'win32'

const COMMAND = isWindows
  ? 'set Path=%Path%;node_modules\\.bin'
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
