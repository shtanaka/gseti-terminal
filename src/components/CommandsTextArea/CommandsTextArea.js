import React from "react";

import CommandsTextAreaStyled from "./CommandsTextArea.styled";
import { CommandsTextAreaLine } from "./components/CommandsTextAreaLine";

export default ({ lines }) => (
  <CommandsTextAreaStyled>
    {lines.map((line, index) => (
      <CommandsTextAreaLine key={`commandLine-${index}`} line={line} />
    ))}
  </CommandsTextAreaStyled>
);
