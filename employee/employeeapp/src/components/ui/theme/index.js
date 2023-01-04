import { createTheme } from "@mui/material";
import { purple, yellow, red, green, brown } from "@mui/material/colors";

const theme1 = createTheme({
  palette: {
    primary: red,
    secondary: yellow,
  },
});

const theme2 = createTheme({
  palette: {
    primary: purple,
    secondary: blue,
  },
});

const theme3 = createTheme({
  palette: {
    primary: green,
    secondary: brown,
  },
});

export { theme1, theme2, theme3 };
