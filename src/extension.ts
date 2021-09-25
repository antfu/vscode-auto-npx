import { window } from 'vscode'

const COMMAND = 'export PATH=$PWD/node_modules/.bin:$PATH'

export async function activate() {
  window.terminals.forEach(async(t) => {
    if (await t.processId)
      return
    t.sendText(COMMAND)
  })
  window.onDidOpenTerminal((t) => {
    t.sendText(COMMAND)
  })
}

export function deactivate() {}
