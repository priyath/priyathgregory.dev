import { PaletteMode } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export const getPaletteConfigs = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: blue,
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: blue,
          tertiary: {
            main: 'rgba(255,255,255,0.05)',
          },
          background: {
            default: '#131a23',
            paper: '#1e2c3a',
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});
