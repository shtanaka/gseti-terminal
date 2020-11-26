import React from "react";

import HomeStyled from "./Home.styled";
import { CommandsTextArea } from "components/CommandsTextArea";

const mockLines = [
  { type: "input", value: "help"},
  { type: "output", value: "\n"},
  { type: "output", value: "\n"},
  { type: "output", value: "Usage: [command]"},
  { type: "output", value: "List of commands:"},
  { type: "output", value: "companies                See all companies Gustavo has worked"},
  { type: "output", value: "company [company_name]   See more about Gustavo's experience in a company. You will see the whole experience he have and what he worked on and see if he fits well in your projects or not."},
]

export default () => {
  
  return (
    <HomeStyled>
      <CommandsTextArea lines={mockLines} />
      <TerminalInput />
    </HomeStyled>
  )
}