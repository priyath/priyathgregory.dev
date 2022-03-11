import {
  PaletteMode,
} from '@mui/material';
import {
  lightPaletteConfigs,
} from './themeConfigs/lightPaletteConfigs';
import {
  darkPaletteConfigs,
} from './themeConfigs/darkPaletteConfigs';

export const getPaletteConfigs = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? lightPaletteConfigs
      : darkPaletteConfigs),
  },
});
