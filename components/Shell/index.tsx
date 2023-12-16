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
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  useScrollTrigger,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { useColorMode } from '../../styles/ColorModeContext';
import { FaGithubAlt, FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import { BsLightbulbFill } from 'react-icons/bs';
import NextLink from 'next/link';
import Image from 'next/image';

const drawerWidth = 260;

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

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Shell = (props: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { toggleColorMode, mode } = useColorMode();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          color: 'transparent',
        }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={12} md={12} sx={{ textAlign: 'left' }}>
              <Box>
                {/*<Typography*/}
                {/*  variant={'h5'}*/}
                {/*  sx={{ pl: 2, pt: 2, pb: 0, fontWeight: 'bold' }}*/}
                {/*>*/}
                {/*  <NextLink href={'/'} passHref>*/}
                {/*    PriyathGregory . Dev*/}
                {/*  </NextLink>*/}
                {/*</Typography>*/}
                {/*<Typography variant={'h7'} sx={{ pl: 2 }}>*/}
                {/*  Exploring scalable Software Design & Architecture.*/}
                {/*</Typography>*/}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Shell;
