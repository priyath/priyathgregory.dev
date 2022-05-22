import next_transpile_modules from 'next-transpile-modules';

const withTM = next_transpile_modules([
  '@mui/material',
  '@mui/system',
  'react-syntax-highlighter',
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
});
