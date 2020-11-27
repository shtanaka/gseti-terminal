import React from "react";

import TerminalTextAreaStyled from "./TerminalTextArea.styled";
import { TerminalTextAreaLine } from "./components/TerminalTextAreaLine";

const TerminalTextArea = ({ lines }) => (
  <TerminalTextAreaStyled>
    {lines.map((line, index) => (
      <TerminalTextAreaLine line={line} key={`commandLine-${index}`} />
    ))}
  </TerminalTextAreaStyled>
);

export default TerminalTextArea;
