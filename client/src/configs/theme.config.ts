import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
import { TTheme } from "../types/theme";

export const themeModes = {
  dark: "dark",
  light: "light",
};

const darkPalette = {
  primary: {
    main: "#ff0000",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#f44336",
    contrastText: "#ffffff",
  },
  background: {
    default: "#000000",
    paper: "#131313",
  },
};

const lightPalette = {
  primary: {
    main: "#ff0000",
  },
  secondary: {
    main: "#f44336",
  },
  background: {
    default: colors.grey["100"],
  },
};

const themeConfigs = {
  custom: (mode: TTheme) => {
    const customPalette = mode === "dark" ? darkPalette : lightPalette;
    return createTheme({
      palette: {
        mode,
        ...customPalette,
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true },
        },
      },
    });
  },
};

export default themeConfigs;
