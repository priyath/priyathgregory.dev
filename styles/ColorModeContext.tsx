import React from 'react';
import {
  ThemeProvider,
  createTheme,
} from '@mui/material';
import {
  getPaletteConfigs,
} from './utils';
import {
  baseThemeConfigs,
} from './themeConfigs/baseThemeConfigs';

enum ColorMode {
  DARK= 'dark',
  LIGHT = 'light',
}

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: ColorMode;
}

export const ColorModeContext = React.createContext<IColorModeContext>((
  {
    toggleColorMode: () => {},
    mode: ColorMode.LIGHT,
  }
));

export const ColorModeContextProvider = ({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  customConfig = {
    themeConfig: {},
  },
}) => {
  const [ mode, setMode ] = React.useState<ColorMode>(ColorMode.DARK);
  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT));
    },
    mode,
  }),
  [ mode ],
  );

  const finalTheme = React.useMemo(() => {

    // apply base theme configs
    const baseTheme = createTheme(baseThemeConfigs);

    // apply color palette based on mode
    const theme = createTheme(baseTheme, getPaletteConfigs(mode));

    theme.typography.button = {
      textTransform: 'none',
      fontFamily: 'Sora',
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    };

    theme.typography.h1 = {
      fontFamily: 'Jeko',
      fontWeight: 700,
      // 0 - 599
      [theme.breakpoints.down('sm')]: {
        fontSize: '3rem',
        lineHeight: '3.5rem',
      },
      // 600 - 904
      [theme.breakpoints.up('sm')]: {
        fontSize: '3rem',
        lineHeight: '3.5rem',
      },
      // 905 - 1239
      [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
        lineHeight: '3.5rem',
      },
      // 1240 - 1439
      [theme.breakpoints.up('lg')]: {
        fontSize: '4.5rem',
        lineHeight: '5rem',
      },
      // 1440 +
      [theme.breakpoints.up('xl')]: {
        fontSize: '4.5rem',
        lineHeight: '5rem',
      },
    };

    theme.typography.h2 = {
      fontFamily: 'Jeko',
      fontWeight: 700,
      // 0 - 599
      [theme.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
        lineHeight: '3rem',
      },
      // 600 - 904
      [theme.breakpoints.up('sm')]: {
        fontSize: '2.5rem',
        lineHeight: '3rem',
      },
      // 905 - 1239
      [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
        lineHeight: '3rem',
      },
      // 1240 - 1439
      [theme.breakpoints.up('lg')]: {
        fontSize: '3rem',
        lineHeight: '3.5rem',
      },
      // 1440 +
      [theme.breakpoints.up('xl')]: {
        fontSize: '3rem',
        lineHeight: '3.5rem',
      },
    };

    theme.typography.h3 = {
      fontFamily: 'Jeko',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: '2.5rem',
    };

    theme.typography.h4 = {
      fontFamily: 'Jeko',
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
    };

    theme.typography.h5 = {
      fontFamily: 'Jeko',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: '2rem',
    };

    theme.typography.h6 = {
      fontFamily: 'Jeko',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    };

    theme.typography.titleheader = {
      fontFamily: 'Jeko',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    };

    theme.typography.subhead1 = {
      fontFamily: 'Sora',
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    };

    theme.typography.subhead2 = {
      fontFamily: 'Sora',
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    };

    theme.typography.body1 = {
      fontFamily: 'Sora',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    };

    theme.typography.body2 = {
      fontFamily: 'Sora',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    };

    theme.typography.caption = {
      fontFamily: 'Sora',
      fontWeight: 700,
      fontSize: '0.75rem',
      lineHeight: '1rem',
    };

    theme.typography.textlink1 = {
      fontFamily: 'Sora',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.5rem',
    };

    theme.typography.textlink2 = {
      fontFamily: 'Sora',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    };

    theme.components = {
      MuiIconButton: {
        variants: [
          {
            props: {
              color: 'primary',
              size: 'large',
            },
            style: {
              color: theme.palette.secondary.main,
              width: '3rem',
              height: '3rem',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                width: '3rem',
                height: '3rem',
                padding: '0.75rem',
                boxShadow: '0 0.5rem 1rem rgba(130, 84, 243, 0.16)',
                borderRadius: '0.5rem',
                backgroundColor: theme.palette.primary.main,
              },
              '&:active': {
                width: '3rem',
                height: '3rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                backgroundColor: theme.palette.primary.light,
              },
              // Usually button should not have focus state.
              // '&:focus': {
              //   width: '3rem',
              //   height: '3rem',
              //   padding: '0.75rem',
              //   borderRadius: '0.5rem',
              //   backgroundColor: theme.palette.primary.main,
              //   border: '2px solid #628080',
              // },
              '&:disabled': {
                color: theme.palette.disabled.dark,
                width: '3rem',
                height: '3rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                backgroundColor: theme.palette.disabled.main,
              },
            },
          },
          {
            props: {
              color: 'primary',
              size: 'medium',
            },
            style: {
              color: theme.palette.secondary.main,
              width: '2.5rem',
              height: '2.5rem',
              padding: '0.5rem',
              borderRadius: '0.375rem',
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                width: '2.5rem',
                height: '2.5rem',
                padding: '0.5rem',
                boxShadow: '0 0.5rem 1rem rgba(130, 84, 243, 0.16)',
                borderRadius: '0.375',
                backgroundColor: theme.palette.primary.main,
              },
              '&:active': {
                width: '2.5rem',
                height: '2.5rem',
                padding: '0.5rem',
                borderRadius: '0.375rem',
                backgroundColor: theme.palette.primary.light,
              },
              '&:disabled': {
                color: theme.palette.disabled.dark,
                width: '2.5rem',
                height: '2.5rem',
                padding: '0.5rem',
                borderRadius: '0.375rem',
                backgroundColor: theme.palette.disabled.main,
              },
            },
          },
          {
            props: {
              color: 'primary',
              size: 'small',
            },
            style: {
              color: theme.palette.secondary.main,
              width: '2rem',
              height: '2rem',
              padding: '0.25rem',
              borderRadius: '0.25rem',
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                width: '2rem',
                height: '2rem',
                padding: '0.25rem',
                boxShadow: '0 0.5rem 1rem rgba(130, 84, 243, 0.16)',
                borderRadius: '0.25rem',
                backgroundColor: theme.palette.primary.main,
              },
              '&:active': {
                width: '2rem',
                height: '2rem',
                padding: '0.25rem',
                borderRadius: '0.25rem',
                backgroundColor: theme.palette.primary.light,
              },
              '&:disabled': {
                color: theme.palette.disabled.dark,
                width: '2rem',
                height: '2rem',
                padding: '0.25rem',
                borderRadius: '0.25rem',
                backgroundColor: theme.palette.disabled.main,
              },
            },
          },
          {
            props: {
              color: 'outline',
              size: 'large',
            },
            style: {
              color: theme.palette.secondary.main,
              width: '3rem',
              height: '3rem',
              padding: '0.75rem',
              border: `1px solid ${theme.palette.outline.light}`,
              boxSizing: 'border-box',
              borderRadius: '0.5rem',
              backgroundColor: 'transparent',
              '&:hover': {
                width: '3rem',
                height: '3rem',
                padding: '0.75rem',
                boxShadow: '0 0.5rem 1rem rgba(130, 84, 243, 0.16)',
                borderRadius: '0.5rem',
                backgroundColor: 'transparent',
              },
              '&:active': {
                width: '3rem',
                height: '3rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                backgroundColor: 'transparent',
              },
              '&:disabled': {
                color: theme.palette.disabled.dark,
                width: '3rem',
                height: '3rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                backgroundColor: 'transparent',
              },
            },
          },
          {
            props: {
              color: 'outline',
              size: 'medium',
            },
            style: {
              color: theme.palette.secondary.main,
              width: '2.5rem',
              height: '2.5rem',
              padding: '0.5rem',
              border: `1px solid ${theme.palette.outline.light}`,
              boxSizing: 'border-box',
              borderRadius: '0.5rem',
              backgroundColor: 'transparent',
              '&:hover': {
                width: '2.5rem',
                height: '2.5rem',
                padding: '0.5rem',
                borderRadius: '0.375',
                boxShadow: '0 0.5rem 1rem rgba(130, 84, 243, 0.16)',
                backgroundColor: 'transparent',
              },
              '&:active': {
                width: '2.5rem',
                height: '2.5rem',
                padding: '0.5rem',
                border: `1px solid ${theme.palette.outline.light}`,
                boxSizing: 'border-box',
                borderRadius: '0.5rem',
                backgroundColor: 'transparent',
              },
              '&:disabled': {
                color: theme.palette.disabled.dark,
                width: '2.5rem',
                height: '2.5rem',
                padding: '0.5rem',
                borderRadius: '0.375rem',
                backgroundColor: 'transparent',
              },
            },
          },
          {
            props: {
              color: 'outline',
              size: 'small',
            },
            style: {
              color: theme.palette.secondary.main,
              width: '2rem',
              height: '2rem',
              padding: '0.25rem',
              borderRadius: '0.25rem',
              backgroundColor: 'transparent',
              '&:hover': {
                width: '2rem',
                height: '2rem',
                padding: '0.25rem',
                borderRadius: '0.25rem',
                boxShadow: '0 0.5rem 1rem rgba(130, 84, 243, 0.16)',
                backgroundColor: 'transparent',
              },
              '&:active': {
                width: '2rem',
                height: '2rem',
                padding: '0.25rem',
                borderRadius: '0.25rem',
                backgroundColor: 'transparent',
              },
              '&:disabled': {
                color: theme.palette.disabled.dark,
                width: '2rem',
                height: '2rem',
                padding: '0.25rem',
                borderRadius: '0.25rem',
                backgroundColor: 'transparent',
              },
            },
          },
        ],
      },
      MuiButton: {
        variants: [
          {
            props: {
              variant: 'fill',
              color: 'primary',
              size: 'large',
            },
            style: {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
              height: '3rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              '&:hover': {
                height: '3rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                backgroundColor: theme.palette.primary.main,
                boxShadow: '0 0.5rem 1rem rgba(130, 84, 243, 0.16)',
              },
              '&:active': {
                height: '3rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                backgroundColor: theme.palette.primary.light,
              },
              // Usually button should not have focus state.
              // '&:focus': {
              //   height: '3rem',
              //   padding: '0.75rem 1.5rem',
              //   borderRadius: '0.5rem',
              //   backgroundColor: theme.palette.primary.main,
              //   border: '2px solid #628080',
              // },
              '&:disabled': {
                height: '3rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                backgroundColor: theme.palette.disabled.main,
                color: theme.palette.disabled.dark,
              },
            },
          },
          {
            props: {
              variant: 'fill',
              color: 'primary',
              size: 'medium',
            },
            style: {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
              height: '2.5rem',
              padding: '0.375rem 0.5rem',
              borderRadius: '0.375rem',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                boxShadow: '0 0.5rem 1rem rgba(130, 84, 243, 0.16)',
              },
              '&:active': {
                backgroundColor: theme.palette.primary.light,
              },
              '&:disabled': {
                backgroundColor: theme.palette.disabled.main,
                color: theme.palette.disabled.dark,
              },
            },
          },
          {
            props: {
              variant: 'fill',
              color: 'primary',
              size: 'small',
            },
            style: {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
              height: '2rem',
              borderRadius: '0.25rem',
              padding: '0.5rem 1.5rem',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                boxShadow: '0 0.5rem 1rem rgba(130, 84, 243, 0.16)',
              },
              '&:active': {
                backgroundColor: theme.palette.primary.light,
              },
              '&:disabled': {
                backgroundColor: theme.palette.disabled.main,
                color: theme.palette.disabled.dark,
              },
            },
          },
          {
            props: {
              variant: 'fill_alternate',
              color: 'secondary',
              size: 'large',
            },
            style: {
              fontWeight: 600,
              textTransform: 'none',
              color: theme.palette.secondary.dark,
              backgroundColor: theme.palette.primary.dark,
              height: '3rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                boxShadow: '0 0.5rem 1rem rgba(0, 22, 22, 0.08)',
              },
              '&:active': {
                backgroundColor: theme.palette.primary.light,
              },
              '&:disabled': {
                backgroundColor: theme.palette.disabled.main,
                color: theme.palette.disabled.dark,
              },
            },
          },
          {
            props: {
              variant: 'fill_alternate',
              color: 'secondary',
              size: 'medium',
            },
            style: {
              fontWeight: 600,
              textTransform: 'none',
              color: theme.palette.secondary.dark,
              backgroundColor: theme.palette.primary.dark,
              height: '2.5rem',
              padding: '0.375rem 0.5rem',
              borderRadius: '0.375rem',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                boxShadow: '0 0.5rem 1rem rgba(0, 22, 22, 0.08)',
              },
              '&:active': {
                backgroundColor: theme.palette.primary.light,
              },
              '&:disabled': {
                backgroundColor: theme.palette.disabled.main,
                color: theme.palette.disabled.dark,
              },
            },
          },
          {
            props: {
              variant: 'fill_alternate',
              color: 'secondary',
              size: 'small',
            },
            style: {
              fontWeight: 600,
              textTransform: 'none',
              color: theme.palette.secondary.dark,
              backgroundColor: theme.palette.primary.dark,
              height: '2rem',
              borderRadius: '0.25rem',
              padding: '0.5rem 1.5rem',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                boxShadow: '0 0.5rem 1rem rgba(0, 22, 22, 0.08)',
              },
              '&:active': {
                backgroundColor: theme.palette.primary.light,
              },
              '&:disabled': {
                backgroundColor: theme.palette.disabled.main,
                color: theme.palette.disabled.dark,
              },
            },
          },
        ],
      },
    };

    // apply app level theme overrides
    return createTheme(theme, customConfig.themeConfig);

  }, [ mode ]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModeContext);
