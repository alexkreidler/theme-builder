// 1. Import the extendTheme function
import { ChakraTheme, extendTheme, theme as defaultTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: defaultTheme.colors.blue
}
export const theme = extendTheme({ colors, fonts: {
  body:"Inter",
  heading: "Inter"
} }) as ChakraTheme
