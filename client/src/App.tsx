import { ThemeProvider } from "@mui/material";
import themeConfigs from "./configs/theme.config";
import { useThemeContext } from "./providers/themeProvider";
import { ToastContainer } from "react-toastify";

function App() {
  const theme = useThemeContext();

  return (
    <ThemeProvider theme={themeConfigs.custom(theme?.theme)}>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default App;
