import React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { getPaletteConfigs } from './utils';
import typographyConfig from './typographyConfig';

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
        fontFamily: ['Roboto', 'sans-serif'].join(','),
        allVariants: {
          color: 'rgba(255,255,255)',
        },
        h5: {
          color: 'rgba(255,255,255,0.7)',
        },
        body1: {
          color: 'rgba(255,255,255,0.7)',
        },
        body2: {
          fontSize: '1.125rem',
          color: 'rgba(255,255,255,0.7)',
        },
      },
      components: {
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              h3: 'h1',
            },
          },
        },
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
