import { PaletteMode } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export const getPaletteConfigs = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: blue,
          background: {
            paper: '#54B689',
          },
          text: {
            primary: '#292929',
            secondary: '#4f4f4f',
          },
          tertiary: {
            main: 'rgba(24,24,24,0.05)',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#54B689',
          },
          tertiary: {
            main: 'rgba(255,255,255,0.05)',
          },
          background: {
            default: '#131a23',
            paper: '#1e2c3a',
          },
          text: {
            primary: 'rgba(255,255,255,0.95)',
            secondary: 'rgba(255,255,255,0.7)',
          },
        }),
  },
});
