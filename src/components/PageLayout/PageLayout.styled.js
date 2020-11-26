import styled from "styled-components"
import {
  devices,
  pagePadding,
} from "shared/styleguide"

export default styled.header`
  padding: ${pagePadding.mobile};
  @media ${devices.tablet} {
    padding: ${pagePadding.tablet};
  }
  @media ${devices.desktop} {
    padding: ${pagePadding.desktop};
  }
`