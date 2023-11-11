import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import getTheme from './theme';
import CssBaseline from '@mui/material/CssBaseline'

enum ColorMode {
  DARK = 'dark',
  LIGHT = 'light',
}

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: ColorMode;
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
  mode: ColorMode.LIGHT,
});

interface IColorModeContextProvider {
  children: React.ReactNode;
}

export const ColorModeContextProvider = ({
  children,
}: IColorModeContextProvider) => {
  const [mode, setMode] = React.useState<ColorMode>(ColorMode.DARK);

  useEffect(() => {
    // update color mode from local storage
    setMode(
      (localStorage.getItem('pg-dev-portfolio-color-mode') as ColorMode) ||
        ColorMode.DARK
    );
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode =
            prevMode === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT;
          document.documentElement.setAttribute('data-theme', newMode);
          localStorage.setItem('pg-dev-portfolio-color-mode', newMode);
          return newMode;
        });
      },
      mode,
    }),
    [mode]
  );

  const finalTheme = React.useMemo(() => {
    return getTheme(ColorMode.LIGHT);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={finalTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModeContext);
