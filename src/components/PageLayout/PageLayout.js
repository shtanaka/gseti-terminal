import React from "react"
import PageLayoutStyled from "./PageLayout.styled"

export default ({ children }) => {
  return (
    <PageLayoutStyled>
      {children}
    </PageLayoutStyled>
  )
}