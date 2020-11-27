import React from "react";
import FocusLock from 'react-focus-lock';

import { replaceAt } from "utils/stringUtils";
import useDebouncedInterval from "hooks/useDebouncedInterval";

import TerminalInputStyled from "./TerminalInput.styled";


const cursorChar = '█';
const inputPrefixChar = '➙';
const blinkCursorSpeedInMs = 500;

const TerminalInput = () => {
  const terminalInputRef = React.useRef(null);
  const [inputValue, setInputValue] = React.useState('help');
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
    const displayText = replaceAt(`${inputValue} `, caretPosition, cursorValue);
    const displayValue = `${inputPrefixChar} ${displayText}`
    setDisplayValue(displayValue);
  }, [inputValue, caretPosition, cursorValue]);

  useDebouncedInterval(() => {
    const blinkChar = caretPosition === inputValue.length ? " " : inputValue[caretPosition];
    setCursorValue(prev => prev === cursorChar ? blinkChar : cursorChar);
  }, blinkCursorSpeedInMs, caretPosition);

  const handleTerminalInputKeyDown = ({ key, target }) => {

    if (key === 'Enter') {
      console.log('Call command!');
    }
  };

  const handleTerminalInputKeyUp = ({ target }) => {
    setCaretPosition(target.selectionStart);
    setCursorValue(cursorChar);
  };

  const handleTerminalInputChange = ({ target }) => {
    setInputValue(target.value);
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

export default TerminalInput;
