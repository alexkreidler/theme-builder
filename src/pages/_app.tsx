import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../theme"
import 'bootstrap/dist/css/bootstrap.css';
import '../main.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp