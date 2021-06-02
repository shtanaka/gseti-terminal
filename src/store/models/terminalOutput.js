import { startLines } from "data/startLines"

export const terminalOutput = {
  state: startLines,
  reducers: {
    insertLine(state, payload) {
      return [...state, payload]
    },
    insertLines(state, payload) {
      return [...state, ...payload]
    },
    clearLines(state, _payload) {
      return []
    }
  },
}