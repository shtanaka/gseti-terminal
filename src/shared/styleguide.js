export const colors = {
  black: "#000",
  white: "#FFF",
  darkGrey: "#282c34",
  grey: "#4A4E56",
  lightGrey: "#6C6F78",
  gold: "#FFDF00",
}

export const devices = {
  mobileS: "(min-width: 320px)",
  mobileM: "(min-width: 375px)",
  mobileL: "(min-width: 425px)",
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  laptop: "(min-width: 1024px)",
  laptopL: "(min-width: 1440px)",
  desktop: "(min-width: 1440px)",
  desktopL: "(min-width: 2560px)"
}

export const sizes = {
  XXS: "8px",
  XS: "12px",
  S: "16px",
  M: "24px",
  L: "32px",
  XL: "48px",
  XXL: "64px",
  XXXL: "128px",
  huge: "256px",
}

export const pagePadding = {
  mobile: `${sizes.S} ${sizes.XS}`,
  tablet: `${sizes.S} ${sizes.XL}`,
  desktop: `${sizes.S} ${sizes.XXXL}`
}

export const DEFAULT_LINE_HEIGHT = 1.3;
export const DEFAULT_FONT_SIZE = 16;