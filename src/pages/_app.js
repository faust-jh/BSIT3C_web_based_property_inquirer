import "../styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
