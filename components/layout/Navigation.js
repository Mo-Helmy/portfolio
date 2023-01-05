import {
  AppBar,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Navigation = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const router = useRouter();
  const pathName = router.pathname;

  const isMobile = useMediaQuery('(max-width:750px)');

  return (
    <AppBar position="static" sx={{ bgcolor: '#212121', paddingY: 1 }}>
      <Container>
        <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
          {isMobile && (
            <IconButton color="inherit" onClick={() => setOpenSidebar(true)}>
              <MenuIcon />
            </IconButton>
          )}

          <Button
            variant="text"
            color="inherit"
            disableElevation
            sx={{
              //flexGrow: !isMobile && 1,
              textAlign: isMobile && 'center',
              marginX: isMobile && 'auto',
              transform: 'translateX(-20px)',
            }}
            onClick={() => router.push('/')}
          >
            <Typography variant="h5" letterSpacing={1}>
              MoHelmy
            </Typography>
          </Button>

          {!isMobile && (
            <Stack direction="row" spacing={0}>
              <Button
                color="inherit"
                onClick={() => router.push('/')}
                variant={pathName === '/' ? 'outlined' : 'text'}
              >
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => router.push('/skills')}
                variant={pathName === '/skills' ? 'outlined' : 'text'}
              >
                Skills
              </Button>
              <Button
                color="inherit"
                onClick={() => router.push('/projects')}
                variant={pathName === '/projects' ? 'outlined' : 'text'}
              >
                Projects
              </Button>
              <Button
                color="inherit"
                onClick={() => router.push('/about')}
                variant={pathName === '/about' ? 'outlined' : 'text'}
              >
                About
              </Button>
              <Button
                color="inherit"
                onClick={() => router.push('/contact')}
                variant={pathName === '/contact' ? 'outlined' : 'text'}
              >
                Contact
              </Button>
            </Stack>
          )}

          <Drawer
            open={openSidebar}
            onClose={(e, reason) => setOpenSidebar(false)}
          >
            <List sx={{ width: '80vw' }}>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    router.push('/');
                    setOpenSidebar(false);
                  }}
                >
                  <ListItemIcon>
                    <HomeIcon sx={{ width: 40, height: 40 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Home"
                    sx={{ '& > span': { fontSize: '1.25rem' } }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    router.push('/skills');
                    setOpenSidebar(false);
                  }}
                >
                  <ListItemIcon>
                    <WorkIcon sx={{ width: 40, height: 40 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Skills"
                    sx={{ '& > span': { fontSize: '1.25rem' } }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    router.push('/projects');
                    setOpenSidebar(false);
                  }}
                >
                  <ListItemIcon>
                    <WorkHistoryIcon sx={{ width: 40, height: 40 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Projects"
                    sx={{ '& > span': { fontSize: '1.25rem' } }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    router.push('/about');
                    setOpenSidebar(false);
                  }}
                >
                  <ListItemIcon>
                    <InfoIcon sx={{ width: 40, height: 40 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="About"
                    sx={{ '& > span': { fontSize: '1.25rem' } }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    router.push('/contact');
                    setOpenSidebar(false);
                  }}
                >
                  <ListItemIcon>
                    <ContactPageIcon sx={{ width: 40, height: 40 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Contact"
                    sx={{ '& > span': { fontSize: '1.25rem' } }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
