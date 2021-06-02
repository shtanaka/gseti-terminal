import * as commands from './commands'

const runCommand = async (cmd) => {
  const command = cmd.split(' ')[0]
  const callback = commands[command]

  try {
    return await callback(cmd)
  } catch(e) {
    return { status: "error", type: "output", value: `Command ${cmd} not found or with invalid parameters.` }
  }
}

export default runCommand