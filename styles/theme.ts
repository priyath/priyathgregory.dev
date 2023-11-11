import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { getPaletteConfigs } from './utils';
import { PaletteMode } from '@mui/material'

const getTheme = (mode: PaletteMode) => {
  const themeWithPalette = createTheme(getPaletteConfigs(mode));
  const themeWithOverrides = createTheme(themeWithPalette, {
    typography: {
      allVariants: {
        color: themeWithPalette.palette.text.primary,
      },
      h5: {
        fontWeight: 'bold',
        color: themeWithPalette.palette.text.primary,
        paddingBottom: '0.8rem',
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
