import { createTheme, PaletteMode, responsiveFontSizes } from '@mui/material';
import { getPaletteConfigs } from './utils';

const getTheme = (mode: PaletteMode) => {
  const themeWithPalette = createTheme(getPaletteConfigs(mode));
  const themeWithOverrides = createTheme(themeWithPalette, {
    typography: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      allVariants: {
        color: themeWithPalette.palette.text.primary,
      },
      h5: {
        color: themeWithPalette.palette.text.primary,
      },
      h6: {
        fontSize: '1.25rem',
        color: themeWithPalette.palette.text.primary,
      },
      body1: {
        color: themeWithPalette.palette.text.secondary,
      },
      body2: {
        fontSize: '1.125rem',
        color: themeWithPalette.palette.text.secondary,
      },
      caption: {
        color: themeWithPalette.palette.text.secondary,
        fontSize: '0.8rem',
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h3: 'h1',
            h4: 'h2',
            h5: 'h3',
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
  return responsiveFontSizes(createTheme(themeWithOverrides));
};

export default getTheme;
