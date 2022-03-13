import { platform } from 'os'
import { Terminal, TerminalOptions, window, workspace } from 'vscode'

const isWindows = platform() === 'win32'

function sendCommand(t: Terminal) {
  let COMMAND = ''
  if (isWindows)
    COMMAND = 'set Path=%Path%;node_modules\\.bin'

  else if ((t.creationOptions as TerminalOptions).shellPath?.includes('fish'))
    COMMAND = 'fish_add_path $PWD/node_modules/.bin'

  else
    COMMAND = 'export PATH=$PWD/node_modules/.bin:$PATH'

  t.sendText(COMMAND)
}

function setup() {
  window.terminals.forEach(async(t) => {
    if (await t.processId)
      return
    sendCommand(t)
  })
  window.onDidOpenTerminal((t) => {
    sendCommand(t)
  })
}

export async function activate() {
  if (workspace.isTrusted)
    setup()
  else
    workspace.onDidGrantWorkspaceTrust(setup)
}

export function deactivate() {}
