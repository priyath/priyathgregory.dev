import React from 'react';
import { ThemeProvider } from '@mui/material';
import getTheme from './theme';

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
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          document.documentElement.setAttribute(
            'data-theme',
            prevMode === ColorMode.LIGHT ? 'dark' : 'light'
          );
          localStorage.setItem('theme', 'dark');
          return prevMode === ColorMode.LIGHT
            ? ColorMode.DARK
            : ColorMode.LIGHT;
        });
      },
      mode,
    }),
    [mode]
  );

  const finalTheme = React.useMemo(() => {
    return getTheme(mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModeContext);
