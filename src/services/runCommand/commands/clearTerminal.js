import store from "store"

export const clearTerminal = async () => {
  store.dispatch({ type: 'terminalOutput/clearLines' })
  return { status: "error", type: "output", value: '' }
}