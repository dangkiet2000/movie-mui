import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { TTheme } from "../../types/theme";

export interface IContextValue {
  theme: TTheme;
  toggleTheme: () => void;
}

interface IThemeProps {
  children: ReactNode;
}

const ThemeContext = createContext<IContextValue | null>(null);

export const ModalProvider = ({ children }: IThemeProps) => {
  const [theme, setTheme] = useState<TTheme>("dark");

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
    
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => useContext(ThemeContext);
