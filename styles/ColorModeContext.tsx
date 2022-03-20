import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { getPaletteConfigs } from './utils';

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
        setMode((prevMode) =>
          prevMode === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT
        );
      },
      mode,
    }),
    [mode]
  );

  const finalTheme = React.useMemo(() => {
    const themeWithOverrides = createTheme({
      typography: {
        allVariants: {
          color: 'rgba(255,255,255)',
        },
        body1: {
          color: 'rgba(255,255,255,0.7)',
        },
      },
      components: {
        MuiListItemIcon: {
          styleOverrides: {
            root: {
              minWidth: '36px',
            },
          },
        },
      },
    });
    return responsiveFontSizes(
      createTheme(themeWithOverrides, getPaletteConfigs(mode))
    );
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModeContext);
