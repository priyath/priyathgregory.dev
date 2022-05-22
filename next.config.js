// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  'react-syntax-highlighter',
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
});
