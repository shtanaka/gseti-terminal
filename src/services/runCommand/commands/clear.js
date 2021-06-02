import store from "store"

export const clear = async () => {
  store.dispatch({ type: 'terminalOutput/clearLines' })
  return { status: "error", type: "output", value: '' }
}