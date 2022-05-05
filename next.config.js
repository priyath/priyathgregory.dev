const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
]); // pass the modules you would like to see transpiled
const withMDX = require('@next/mdx')();

// optional next.js configuration
const nextConfig = {};

module.exports = withPlugins(
  [
    // add a plugin with specific configuration
    [
      withTM,
      {
        reactStrictMode: true,
      },
    ],
    [withMDX, { pageExtensions: ['js', 'mdx'] }],
  ],
  nextConfig
);
