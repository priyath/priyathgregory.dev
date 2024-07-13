import { PaletteMode } from '@mui/material';
//<a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-overwhelmed-people-illustration_24683085.htm#fromView=search&page=1&position=0&uuid=ecfa32b7-85d6-4b5a-b219-98bdb7ad0659">Image by freepik</a>
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
            main: '#4f4f4f',
          },
          background: {
            paper: '#54B689',
            card: '#f8f8f8',
            icon: 'rgba(95,119,108,0.12)',
          },
          text: {
            primary: '#292929',
            secondary: '#212529',
            brand: 'rgba(255,255,255,0.8)',
            caption2: '#848991',
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
            main: 'rgba(84,182,137)',
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
            secondary: 'rgba(255,255,255,0.90)',
            brand: '#54B689',
            caption2: 'rgba(255,255,255,0.7)',
          },
        }),
  },
});
