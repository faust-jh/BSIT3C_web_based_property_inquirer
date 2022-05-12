import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#21130d",
    },
    secondary: {
      main: "#F7CCAC",
    },
  },

  typography: {
    fontFamily: "Barlow",
  },
});

export default theme;
