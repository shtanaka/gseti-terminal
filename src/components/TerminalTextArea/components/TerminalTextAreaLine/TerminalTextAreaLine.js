import React from "react";

import TerminalTextAreaLineStyled from "./TerminalTextAreaLine.styled";

const InputPrefix = () => (
  <span className="input-prefix">➙ </span>
);

const TerminalTextAreaLine = ({ line, ...props }) => {
  const { type, value } = line;
  const isInput = type === 'input';

  return (
    <TerminalTextAreaLineStyled {...props}>
      {isInput && <InputPrefix />}{value}
    </TerminalTextAreaLineStyled>
  );
};

export default TerminalTextAreaLine;