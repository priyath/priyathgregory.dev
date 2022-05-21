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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useColorMode } from '../../styles/ColorModeContext';
import { FaGithubAlt, FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import { BsLightbulbFill } from 'react-icons/bs';

const drawerWidth = 260;

const sidePanelConfig = [
  {
    label: 'About Me',
    icon: <PersonIcon />,
    path: '/',
  },
  {
    label: 'Blog',
    icon: <LibraryBooksIcon />,
    path: '/blog',
  },
];

const Shell = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { toggleColorMode } = useColorMode();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const drawer = (
    <Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant={'h5'} sx={{ pt: 2 }}>
          Priyath Gregory
        </Typography>
        <Avatar
          alt="Remy Sharp"
          src="/pic02.png"
          sx={{ width: 150, height: 150, margin: 'auto', my: 2 }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: 2,
            gap: 1.5,
          }}
        >
          <a
            href="https://www.github.com/priyath"
            target={'_blank'}
            rel="noreferrer"
          >
            <Avatar
              sx={{ width: 32, height: 32, backgroundColor: 'primary.main' }}
            >
              <FaGithubAlt size={'0.8em'} color={'white'} />
            </Avatar>
          </a>
          <a
            href="https://www.linkedin.com/in/priyathg"
            target={'_blank'}
            rel="noreferrer"
          >
            <Avatar
              sx={{ width: 32, height: 32, backgroundColor: 'primary.main' }}
            >
              <FaLinkedinIn size={'0.8em'} color={'white'} />
            </Avatar>
          </a>
          <a
            href="https://medium.com/@priyathgregory"
            target={'_blank'}
            rel="noreferrer"
          >
            <Avatar
              sx={{ width: 32, height: 32, backgroundColor: 'primary.main' }}
            >
              <FaMediumM size={'0.8em'} color={'white'} />
            </Avatar>
          </a>
        </Box>
        {/*<Typography align={'center'} variant={'body1'} sx={{ p: 2, pt: 0 }}>*/}
        {/*  Hi, my name is Priyath Gregory and I'm a full-stack software engineer.*/}
        {/*  Welcome to my personal website!*/}
        {/*</Typography>*/}
      </Grid>
      <Divider />
      <Grid container spacing={0} direction="column">
        <List>
          {sidePanelConfig.map((itemConfig, index) => (
            <a key={index} href={itemConfig.path}>
              <ListItem button>
                <ListItemIcon>{itemConfig.icon}</ListItemIcon>
                <ListItemText primary={itemConfig.label} />
              </ListItem>
            </a>
          ))}
        </List>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            margin: 'auto',
          }}
        >
          <Switch
            onClick={() => toggleColorMode()}
            sx={{ margin: 'auto' }}
            {...label}
            defaultChecked
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 1,
              alignItems: 'bottom',
            }}
          >
            <BsLightbulbFill color={'#3c755a'} />
            <Typography variant={'caption'}>Dark Mode</Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          display: { xs: 'block', md: 'none' },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundImage: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              backgroundImage: 'none',
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              backgroundImage: 'none',
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Shell;
