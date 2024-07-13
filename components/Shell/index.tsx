import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Divider, Link, Switch } from '@mui/material';
import { useColorMode } from '../../styles/ColorModeContext';
import NextLink from 'next/link';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  // { label: 'Github', path: 'https://github.com/priyath', newTab: true },
];

const pagesFlexReverse = [
  { label: 'Blog', path: '/blog' },
  { label: 'Home', path: '/' },
  // { label: 'Github', path: 'https://github.com/priyath', newTab: true },
];

const Shell = () => {
  const { toggleColorMode, mode } = useColorMode();

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Box sx={{ padding: 0 }}>
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
          <Toolbar disableGutters sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                my: { xs: 0, md: 2 },
                display: { xs: 'flex' },
                fontWeight: 400,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                justifyContent: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <NextLink href={`/`} passHref>
                <Link color={'text.primary'} underline="none">
                  PriyathGregory.Dev
                </Link>
              </NextLink>
            </Typography>
            <Box
              gap={4}
              sx={{
                flexGrow: 1,
                flexDirection: 'row-reverse',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {pagesFlexReverse.map((page, index) => (
                <Button
                  key={index}
                  sx={{
                    my: { xs: 0, md: 2 },
                    color: 'text.secondary',
                    display: 'block',
                    textTransform: 'none',
                    fontSize: 'body2.fontSize',
                    fontWeight: 400,
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

            <Box ml={6} sx={{ flexGrow: 0 }}>
              <Switch
                onClick={() => toggleColorMode()}
                {...label}
                checked={mode === 'dark'}
              />
            </Box>
          </Toolbar>

          <Toolbar
            disableGutters
            sx={{
              pt: { xs: 0, md: 4 },
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <Box
              gap={1}
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={index}
                  sx={{
                    my: { xs: 0, md: 2 },
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

            <Box ml={2} sx={{ flexGrow: 0 }}>
              <Switch
                onClick={() => toggleColorMode()}
                {...label}
                checked={mode === 'dark'}
              />
            </Box>
          </Toolbar>
          <Divider
            sx={{
              display: { md: 'none' },
              color: 'primary.main',
              width: '100%',
              marginX: 'auto',
            }}
          />
        </Container>
      </AppBar>
    </Box>
  );
};

export default Shell;
