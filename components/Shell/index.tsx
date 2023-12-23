import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Divider, Grid, Link, Switch } from '@mui/material';
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
    <Box sx={{ padding: 0, pb: { xs: 4 } }}>
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
          <Toolbar
            disableGutters
            sx={{ pt: 4, display: { xs: 'none', md: 'flex' } }}
          >
            <Grid container>
              <Grid item xs={12} md={8}>
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
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: {
                    sx: 'center',
                    md: 'right',
                  },
                }}
              >
                <Switch
                  onClick={() => toggleColorMode()}
                  {...label}
                  checked={mode === 'dark'}
                />
              </Grid>
            </Grid>
          </Toolbar>
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={8}>
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
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  justifyContent: {
                    xs: 'right',
                  },
                }}
              >
                <Switch
                  onClick={() => toggleColorMode()}
                  {...label}
                  checked={mode === 'dark'}
                />
              </Grid>
            </Grid>
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
