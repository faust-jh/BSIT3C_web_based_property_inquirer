import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#66a6ff",
    },
    secondary: {
      main: "#89f7fe",
    },
  },

  typography: {
    fontFamily: "Helvetica",
  },
});

export default theme;
