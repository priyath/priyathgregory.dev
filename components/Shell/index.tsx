import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Link, Switch } from '@mui/material';
import { useColorMode } from '../../styles/ColorModeContext';
import NextLink from 'next/link';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Github', path: 'https://github.com/priyath', newTab: true },
];

const Shell = () => {
  const { toggleColorMode, mode } = useColorMode();

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Box sx={{ padding: 0, pb: { xs: 2, md: 8 } }}>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          color: 'transparent',
        }}
      >
        <Container disableGutters={true} maxWidth="xl">
          <Toolbar disableGutters sx={{ pt: 4 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                mr: 2,
                display: { xs: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
              }}
            >
              <NextLink href={`/`} passHref>
                <Link color={'text.primary'} underline="none">
                  PriyathGregory.Dev
                </Link>
              </NextLink>
            </Typography>
            <Switch
              onClick={() => toggleColorMode()}
              sx={{ margin: 'auto' }}
              {...label}
              checked={mode === 'dark'}
            />
          </Toolbar>
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex' },
                margin: 'auto',
                width: '100%',
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={() => {}}
                  sx={{
                    my: 2,
                    color: 'text.secondary',
                    display: 'block',
                    textTransform: 'none',
                    fontSize: 'body2.fontSize',
                  }}
                >
                  <NextLink href={page.path} passHref>
                    <Link
                      color={'text.primary'}
                      underline="none"
                      target={page.newTab ? '_blank' : undefined}
                    >
                      {page.label}
                    </Link>
                  </NextLink>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Shell;
