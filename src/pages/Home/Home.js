import React from "react";

import { mockLines } from "data/mockLines";
import { TerminalTextArea } from "components/TerminalTextArea";
import { TerminalInput } from "components/TerminalInput";

import HomeStyled from "./Home.styled";

const Home = () => {
  return (
    <HomeStyled>
      <TerminalTextArea lines={mockLines} />
      <TerminalInput />
    </HomeStyled>
  )
}

export default Home;