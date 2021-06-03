import React from "react"
import { connect } from 'react-redux'
import FocusLock from 'react-focus-lock'

import { replaceAt } from "utils/stringUtils"
import useDebouncedInterval from "hooks/useDebouncedInterval"

import TerminalInputStyled from "./TerminalInput.styled"

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
    setInputValue(target.value);
  };

  const handleTerminalInputKeyDown = async ({ key }) => {
    if (key === 'Enter') {
      setInputValue('')
      callCommand(inputValue)
      terminalOutputDispatch.resetAutocompleteInversedIndex();
    }
    if (key === 'ArrowLeft') {
      setCaretPosition(caretPosition > 0 ? caretPosition - 1 : caretPosition);
      setCursorValue(cursorChar);
    }
    if (key === 'ArrowRight') {
      setCaretPosition(caretPosition < inputValue.length ? caretPosition + 1 : caretPosition);
      setCursorValue(cursorChar);
    }

    if (key === 'ArrowUp') {
      terminalOutputDispatch.incrementAutocompleteInversedIndex();
    }

    if (key === 'ArrowDown') {
      terminalOutputDispatch.decrementAutocompleteInversedIndex();
    }
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
          type="text"
          value={inputValue}
          ref={terminalInputRef}
          className="hidden-input"
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
