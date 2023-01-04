import { ThemeProvider } from "@mui/material";
import {theme1, theme2, theme3} from "./index";

function CustomThemeProvider({children}){
    return(<ThemeProvider theme={theme3} >{children}</ThemeProvider>)
}

export default CustomThemeProvider;