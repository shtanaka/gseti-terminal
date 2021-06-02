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
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('command called: ', commandLine)
      
      this.setIsTerminalInputActive(true)
    },
  }),
}