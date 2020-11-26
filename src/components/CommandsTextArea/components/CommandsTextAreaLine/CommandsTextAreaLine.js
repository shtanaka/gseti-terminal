import React from "react";

import CommandsTextAreaLineStyled from "./CommandsTextAreaLine.styled";

const InputPrefix = () => (
  <span className="input-prefix">➙ </span>
);

export default ({ line }) => {
  const { type, value } = line;
  const isInput = type === 'input';

  return (
    <CommandsTextAreaLineStyled>
      {isInput && <InputPrefix />}{value}
    </CommandsTextAreaLineStyled>
  );
};