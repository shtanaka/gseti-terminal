import { startLines } from "data/startLines"

export const terminalOutput = {
  state: {
    lines: startLines,
    autocompleteInversedIndex: -1,
    currentAutoCompleteLine: '',
  },
  reducers: {
    incrementAutocompleteInversedIndex(state, _payload) {
      const val = state.autocompleteInversedIndex
      const inputLines = state.lines.filter((item) => item.type === 'input')
      
      if (val === -1) {
        if (inputLines.length) {
          return { ...state, autocompleteInversedIndex: 0, currentAutoCompleteLine: inputLines[inputLines.length - 1].value };
        }
        return state;
      }

      const autocompleteInversedIndex = val < inputLines.length - 1 ? val + 1 : val
      const newIndex = (inputLines.length - 1) - autocompleteInversedIndex

      if (newIndex <= inputLines.length - 1) {
        const currentAutoCompleteLine = inputLines[newIndex].value
        return { ...state, autocompleteInversedIndex, currentAutoCompleteLine }
      }

      return { ...state, autocompleteInversedIndex: -1, currentAutoCompleteLine: '' };
    },
    decrementAutocompleteInversedIndex(state, _payload) {
      const val = state.autocompleteInversedIndex
      const inputLines = state.lines.filter((item) => item.type === 'input')
      
      if (val === -1) {
        return state;
      }

      const autocompleteInversedIndex = val > 0 ? val - 1 : val
      const newIndex = (inputLines.length - 1) - autocompleteInversedIndex

      if (newIndex >= 0) {
        const currentAutoCompleteLine = inputLines[newIndex].value
        return { ...state, autocompleteInversedIndex, currentAutoCompleteLine }
      }

      return { ...state, autocompleteInversedIndex: -1, currentAutoCompleteLine: '' };
    },
    resetAutocompleteInversedIndex(state, _payload) {
      return { ...state, autocompleteInversedIndex: -1, currentAutoCompleteLine: '' }
    },
    insertLine(state, payload) {
      return { ...state, lines: [...state.lines, payload] }
    },
    insertLines(state, payload) {
      return { ...state, lines: [...state.lines, ...payload] }
    },
    clearLines(_state, _payload) {
      return { lines: [], autocompleteInversedIndex: -1, currentAutoCompleteLine: '' }
    }
  },
}