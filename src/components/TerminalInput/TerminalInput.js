import React from "react"
import { connect } from 'react-redux'
import FocusLock from 'react-focus-lock'

import { replaceAt } from "utils/stringUtils"
import useDebouncedInterval from "hooks/useDebouncedInterval"

import TerminalInputStyled from "./TerminalInput.styled"
import { scrollPageToPosition } from "utils/pageUtils"

const cursorChar = '█';
const inputPrefixChar = '➙';
const blinkCursorSpeedInMs = 500;

const TerminalInput = ({
  callCommand,
  currentAutoCompleteLine,
  terminalOutputDispatch,
  isTerminalInputActive,
}) => {
  const terminalInputRef = React.useRef(null);
  const [inputValue, setInputValue] = React.useState('');
  const [cursorValue, setCursorValue] = React.useState(cursorChar);
  const [displayValue, setDisplayValue] = React.useState(inputPrefixChar);
  const [caretPosition, setCaretPosition] = React.useState('help'.length);

  React.useEffect(() => {
    const handleGlobalClick = () => {
      terminalInputRef.current.focus();
    };
    document.body.addEventListener('click', handleGlobalClick);

    return () => {
      document.body.removeEventListener('click', handleGlobalClick);
    }
  }, []);

  React.useEffect(() => {
    scrollPageToPosition(terminalInputRef.current.offsetTop)
    if (isTerminalInputActive) {
      const displayText = replaceAt(`${inputValue} `, caretPosition, cursorValue);
      const displayValue = `${inputPrefixChar} ${displayText} `
      setDisplayValue(displayValue);
    } else {
      const displayText = replaceAt(`${inputValue} `, caretPosition, cursorValue);
      setDisplayValue(displayText);
    }

  }, [inputValue, caretPosition, cursorValue, isTerminalInputActive]);

  React.useEffect(() => {
    setInputValue(currentAutoCompleteLine);
  }, [currentAutoCompleteLine])

  useDebouncedInterval(() => {
    const blinkChar = caretPosition === inputValue.length ? " " : inputValue[caretPosition];
    setCursorValue(cursorValue === cursorChar ? blinkChar : cursorChar);
  }, blinkCursorSpeedInMs, caretPosition);


  const handleTerminalInputChange = ({ target }) => {
    setInputValue(target.value)
  };

  const handleTerminalInputKeyDown = async ({ key }) => {
    const keyMapCallback = {
      Enter: () => {
        setInputValue('')
        callCommand(inputValue)
        terminalOutputDispatch.resetAutocompleteInversedIndex()
      },
      ArrowLeft: () => {
        const newCaretPosition = caretPosition > 0 ? caretPosition - 1 : caretPosition
        setCaretPosition(newCaretPosition)
        setCursorValue(cursorChar)
      },
      ArrowRight: () => {
        const newCaretPosition = caretPosition < inputValue.length ? caretPosition + 1 : caretPosition
        setCaretPosition(newCaretPosition)
        setCursorValue(cursorChar)
      },
      ArrowUp: () => {
        terminalOutputDispatch.incrementAutocompleteInversedIndex()
      },
      ArrowDown: () => {
        terminalOutputDispatch.decrementAutocompleteInversedIndex()
      }
    }
    const callback = keyMapCallback[key]
    if (callback) callback()

  };

  const handleTerminalInputKeyUp = ({ target }) => {
    setCaretPosition(target.selectionStart);
    setCursorValue(cursorChar);
  };

  return (
    <TerminalInputStyled>
      <pre>{displayValue}</pre>
      <FocusLock>
        <input
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          type="text"
          value={inputValue}
          ref={terminalInputRef}
          className="hidden-input"
          onFocus={() => scrollPageToPosition(terminalInputRef.current.offsetTop)}
          onKeyDown={handleTerminalInputKeyDown}
          onKeyUp={handleTerminalInputKeyUp}
          onChange={handleTerminalInputChange}
        />
      </FocusLock>
    </TerminalInputStyled>
  );
}

const mapState = ({ terminal, terminalOutput }) => ({
  currentAutoCompleteLine: terminalOutput.currentAutoCompleteLine,
  isTerminalInputActive: terminal.isTerminalInputActive,
})

const mapDispatch = ({ terminal, terminalOutput }) => ({
  terminalOutputDispatch: terminalOutput,
  callCommand: terminal.callCommand,
})

const ConnectedTerminalInput = connect(mapState, mapDispatch)(TerminalInput)

export default ConnectedTerminalInput;
