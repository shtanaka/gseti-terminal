import runCommand from "services/runCommand"

export const terminal = {
  state: {
    isTerminalInputActive: true,
    inputValue: '',
  },
  reducers: {
    setIsTerminalInputActive: (state, payload) => ({
      ...state,
      isTerminalInputActive: payload,
    }),
  },
  effects: dispatch => ({
    async callCommand(commandLine, _rootState) {
      this.setIsTerminalInputActive(false)
      
      await dispatch.terminalOutput.insertLine({ status: "success", type: "input", value: commandLine })
      
      const commandOutput = await runCommand(commandLine)
      if (commandOutput) {
        if (Array.isArray(commandOutput)){
          await dispatch.terminalOutput.insertLines(commandOutput)
        } else {
          await dispatch.terminalOutput.insertLine(commandOutput)
        }
      }

      this.setIsTerminalInputActive(true)
    },
  }),
}