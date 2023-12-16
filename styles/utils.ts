import { PaletteMode } from '@mui/material';

export const getPaletteConfigs = (mode: PaletteMode) => ({
  typography: {
    allVariants: {
      fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
    },
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#4f4f4f',
          },
          secondary: {
            main: '#54B689',
          },
          background: {
            paper: '#54B689',
            card: '#fff',
            icon: '#fff',
            hover: 'rgba(79, 79, 79, 0.04)',
          },
          text: {
            primary: '#292929',
            secondary: '#4f4f4f',
            brand: 'rgba(255,255,255,0.8)',
          },
          sidebarTypography: {
            main: 'rgba(255,255,255,0.8)',
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
          secondary: {
            main: '#fff',
          },
          tertiary: {
            main: 'rgba(255,255,255,0.05)',
          },
          sidebarTypography: {
            main: 'rgba(255,255,255,0.7)',
          },
          background: {
            default: '#131a23',
            paper: '#1e2c3a',
            card: '#131a23',
            icon: '#54B689',
          },
          text: {
            primary: 'rgba(255,255,255,0.95)',
            secondary: 'rgba(255,255,255,0.7)',
            brand: '#54B689',
          },
        }),
  },
});
