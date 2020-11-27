import React from "react"
import PageLayoutStyled from "./PageLayout.styled"

const PageLayout = ({ children }) => {
  return (
    <PageLayoutStyled>
      {children}
    </PageLayoutStyled>
  )
}

export default PageLayout;