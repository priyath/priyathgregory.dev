import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Avatar,
  Button,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
  Tooltip,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { useColorMode } from '../../styles/ColorModeContext';
import { FaGithubAlt, FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import { BsLightbulbFill } from 'react-icons/bs';
import NextLink from 'next/link';
import Image from 'next/image';
import AdbIcon from '@mui/icons-material/Adb';

const drawerWidth = 260;
const pages = ['Home', 'Blog', 'Github'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const sidePanelConfig = [
  {
    label: 'About Me',
    icon: <PersonIcon />,
    path: '/',
  },
  // {
  //   label: 'Blog',
  //   icon: <LibraryBooksIcon />,
  //   path: '/blog',
  // },
];

const Shell = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { toggleColorMode, mode } = useColorMode();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
              PriyathGregory.Dev
            </Typography>
            <Switch
              onClick={() => toggleColorMode()}
              sx={{ margin: 'auto' }}
              {...label}
              checked={mode === 'dark'}
            />

            {/*<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>*/}
            {/*  <IconButton*/}
            {/*    size="large"*/}
            {/*    aria-label="account of current user"*/}
            {/*    aria-controls="menu-appbar"*/}
            {/*    aria-haspopup="true"*/}
            {/*    onClick={handleOpenNavMenu}*/}
            {/*    color="inherit"*/}
            {/*  >*/}
            {/*    <MenuIcon />*/}
            {/*  </IconButton>*/}
            {/*  <Menu*/}
            {/*    id="menu-appbar"*/}
            {/*    anchorEl={anchorElNav}*/}
            {/*    anchorOrigin={{*/}
            {/*      vertical: 'bottom',*/}
            {/*      horizontal: 'left',*/}
            {/*    }}*/}
            {/*    keepMounted*/}
            {/*    transformOrigin={{*/}
            {/*      vertical: 'top',*/}
            {/*      horizontal: 'left',*/}
            {/*    }}*/}
            {/*    open={Boolean(anchorElNav)}*/}
            {/*    onClose={handleCloseNavMenu}*/}
            {/*    sx={{*/}
            {/*      display: { xs: 'block', md: 'none' },*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    {pages.map((page) => (*/}
            {/*      <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
            {/*        <Typography textAlign="center">{page}</Typography>*/}
            {/*      </MenuItem>*/}
            {/*    ))}*/}
            {/*  </Menu>*/}
            {/*</Box>*/}
            {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
            {/*<Typography*/}
            {/*  variant="h5"*/}
            {/*  noWrap*/}
            {/*  component="a"*/}
            {/*  href="#app-bar-with-responsive-menu"*/}
            {/*  sx={{*/}
            {/*    mr: 2,*/}
            {/*    display: { xs: 'flex', md: 'none' },*/}
            {/*    flexGrow: 1,*/}
            {/*    fontFamily: 'monospace',*/}
            {/*    fontWeight: 700,*/}
            {/*    letterSpacing: '.3rem',*/}
            {/*    color: 'inherit',*/}
            {/*    textDecoration: 'none',*/}
            {/*  }}*/}
            {/*>*/}
            {/*  LOGO*/}
            {/*</Typography>*/}
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
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'text.secondary',
                    display: 'block',
                    textTransform: 'none',
                    fontSize: 'body2.fontSize',
                  }}
                >
                  {page}
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
