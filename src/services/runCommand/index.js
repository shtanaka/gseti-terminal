import * as commands from './commands'

export default async (cmd) => {
  switch (cmd) {
    case 'help':
      return await commands.printHelp()
    case 'clear':
      return await commands.clearTerminal()
    default:
      return { status: "error", type: "output", value: '' }
  }
}
