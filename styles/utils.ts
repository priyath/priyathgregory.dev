import { PaletteMode } from '@mui/material';

export const getPaletteConfigs = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#54B689',
          },
          secondary: {
            main: '#54B689',
          },
          background: {
            paper: '#54B689',
            card: '#f8f8f8',
            icon: '#fff',
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
            card: '#1e2c3a',
            icon: 'rgba(255,255,255,0.05)',
          },
          text: {
            primary: 'rgba(255,255,255,0.95)',
            secondary: 'rgba(255,255,255,0.7)',
            brand: '#54B689',
          },
        }),
  },
});
