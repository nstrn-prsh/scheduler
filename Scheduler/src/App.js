//mui
import { deepmerge } from "@mui/utils";
import { extendTheme as extendJoyTheme } from "@mui/joy/styles";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "@mui/joy/GlobalStyles";
import {
   Experimental_CssVarsProvider as CssVarsProvider,
   experimental_extendTheme as extendMuiTheme,
} from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";
//component
import vazireot from "./asset/fonts/Vazir.eot";
import vazirttf from "./asset/fonts/Vazir.ttf";
import vazirwoff from "./asset/fonts/Vazir.woff";
import vazirwoff2 from "./asset/fonts/Vazir.woff2";
import Scheduler from "./components/Scheduler";

const muiTheme = extendMuiTheme({
   direction: "rtl !important",
   fontFamily: "vazir !important",
   typography: {
      fontFamily: "vazir !important",
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 440,
         md: 730,
         lg: 1070,
         xl: 1200,

         mobile: 0,
         tablet: 440,
         laptop: 730,
         desktop: 1070,

         // xs: 0,
         // sm: 576,
         // md: 768,
         // lg: 992,
         // xl: 1200,
         // xxl: 1400
      },
   },
   components: {
      MuiCssBaseline: {
         styleOverrides: `
              @font-face {
                font-family: vazir;
                src: url(${vazireot}) format('eot'),url(${vazirttf}) format('ttf'),url(${vazirwoff}) format('woff'),url(${vazirwoff2}) format('woff2');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
            `,
      },
   },
});

const joyTheme = extendJoyTheme({
   // This is required to point to `var(--mui-*)` because we are using `CssVarsProvider` from Material UI.
   cssVarPrefix: "mui",

   colorSchemes: {
      light: {
         palette: {
            primary: {
               ...blue,
               main: "#1976d2",
               light: "#42a5f5",
               dark: "#1565c0",
               contrastText: "#fff",
               solidColor: "var(--mui-palette-primary-contrastText)",
               solidBg: "var(--mui-palette-primary-main)",
               solidHoverBg: "var(--mui-palette-primary-dark)",
               plainColor: "var(--mui-palette-primary-main)",
               plainHoverBg:
                  "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
               plainActiveBg:
                  "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
               outlinedBorder:
                  "rgba(var(--mui-palette-primary-mainChannel) / 0.5)",
               outlinedColor: "var(--mui-palette-primary-main)",
               outlinedHoverBg:
                  "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
               outlinedHoverBorder: "var(--mui-palette-primary-main)",
               outlinedActiveBg:
                  "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
            },
            secondary: {
               main: "#9c27b0",
               light: "#ba68c8",
               dark: "#7b1fa2",
               contrastText: "#fff",
            },
            error: {
               main: "#d32f2f",
               light: "#ef5350",
               dark: "#c62828",
               contrastText: "#fff",
            },
            warning: {
               main: "#ed6c02 !important",
               light: "#ff9800 !important",
               dark: "#e65100 !important",
               contrastText: "#fff !important",
            },
            info: {
               main: "#0288d1",
               light: "#03a9f4",
               dark: "#01579b",
               contrastText: "#fff",
            },
            success: {
               main: "#2e7d32",
               light: "#4caf50",
               dark: "#1b5e20",
               contrastText: "#fff",
            },
            neutral: {
               ...grey,
            },
            // Do the same for the `danger`, `info`, `success`, and `warning` palettes,
            divider: "var(--mui-palette-divider)",
            text: {
               tertiary: "rgba(0 0 0 / 0.56)",
            },
         },
      },
      // Do the same for dark mode
      // dark: { ... }
   },
   shadow: {
      xs: `var(--mui-shadowRing), ${muiTheme.shadows[1]}`,
      sm: `var(--mui-shadowRing), ${muiTheme.shadows[2]}`,
      md: `var(--mui-shadowRing), ${muiTheme.shadows[4]}`,
      lg: `var(--mui-shadowRing), ${muiTheme.shadows[8]}`,
      xl: `var(--mui-shadowRing), ${muiTheme.shadows[12]}`,
   },
});

// You can use your own `deepmerge` function.
// muiTheme will deeply merge to joyTheme.
const theme = deepmerge(joyTheme, muiTheme);

function App() {
   return (
      <CssVarsProvider theme={theme}>
         <CssBaseline />
         {/* <JoyScopedCssBaseline /> */}
         <GlobalStyles
            styles={`@font-face {
         font-family: vazir;
         src: url(${vazireot}) format('eot'),url(${vazirttf}) format('ttf'),url(${vazirwoff}) format('woff'),url(${vazirwoff2}) format('woff2');
         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }`}
         />

         <Scheduler />
      </CssVarsProvider>
   );
}

export default App;
