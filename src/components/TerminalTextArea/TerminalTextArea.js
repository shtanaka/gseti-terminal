import React from "react";

import { connect } from 'react-redux'

import TerminalTextAreaStyled from "./TerminalTextArea.styled"
import { TerminalTextAreaLine } from "./components/TerminalTextAreaLine"

const TerminalTextArea = ({ terminalOutput }) => {
  return (
    <TerminalTextAreaStyled>
      {terminalOutput.map((line, index) => (
        <TerminalTextAreaLine line={line} key={`commandLine-${index}`} />
      ))}
    </TerminalTextAreaStyled>
  );
}

const mapState = ({ terminalOutput }) => ({ terminalOutput })

const mapDispatch = () => ({})

const ConnectedTerminalTextArea = connect(mapState, mapDispatch)(TerminalTextArea)

export default ConnectedTerminalTextArea
