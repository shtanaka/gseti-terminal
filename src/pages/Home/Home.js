import React from "react";

import { TerminalTextArea } from "components/TerminalTextArea";
import { TerminalInput } from "components/TerminalInput";

import HomeStyled from "./Home.styled";

const Home = () => {
  return (
    <HomeStyled>
      <TerminalTextArea />
      <TerminalInput />
    </HomeStyled>
  )
}

export default Home;