import * as commands from './commands'

const runCommand = async (cmd) => {
  switch (cmd) {
    case 'help':
      return await commands.printHelp()
    case 'clear':
      return await commands.clearTerminal()
    default:
      return { status: "error", type: "output", value: `Command ${cmd} not found.` }
  }
}

export default runCommand