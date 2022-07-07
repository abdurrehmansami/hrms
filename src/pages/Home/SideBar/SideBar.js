import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentSharpIcon from '@mui/icons-material/AssignmentSharp';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import SupervisorAccountSharpIcon from '@mui/icons-material/SupervisorAccountSharp';
import DeveloperModeSharpIcon from '@mui/icons-material/DeveloperModeSharp';
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import UpcomingSharpIcon from '@mui/icons-material/UpcomingSharp';
import DoneOutlineSharpIcon from '@mui/icons-material/DoneOutlineSharp';
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';

import ListSubheader from '@mui/material/ListSubheader';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';

import logo from '../../../assets/images/logo.png'

const drawerWidth = 240;

export default function SideBar() {
  
  const [openProjects, setOpenProjects] = React.useState(true);
  const [openAccounts, setOpenAccounts] = React.useState(true);

  const handleClickProjects = () => {
    setOpenProjects(!openProjects);
  };

  const handleClickAccounts = () => {
    setOpenAccounts(!openAccounts);
  };


  return (
    <Box sx={{ display: 'flex' }}
   >
      <CssBaseline />
      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <img height={50} width={150} src={logo} alt="<Codup />" />
        </Toolbar>
        <Divider />
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     Nested List Items
          //   </ListSubheader>
          // }
        >

          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Bench" />
          </ListItemButton>

          <ListItemButton onClick={handleClickProjects}>
            <ListItemIcon>
              <AssignmentSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
            {openProjects ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openProjects} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DoubleArrowSharpIcon />
              <ListItemText primary="Assigned Projects" />
            </ListItemIcon>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <UpcomingSharpIcon />
              <ListItemText primary="Unassigned Projects" />
            </ListItemIcon>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <DoneOutlineSharpIcon />
              <ListItemText primary="Completed Projects" />
            </ListItemIcon>
            </ListItemButton>
         
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickAccounts}>
            <ListItemIcon>
              <ManageAccountsSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Accounts" />
            {openAccounts ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openAccounts} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SupervisorAccountSharpIcon />
              <ListItemText primary="Admins Account" />
            </ListItemIcon>
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonSharpIcon />
              <ListItemText primary="Developers Account" />
            </ListItemIcon>
            </ListItemButton>
         
        </List>
      </Collapse>

          <ListItemButton>
            <ListItemIcon>
              <DeveloperModeSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Developers" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <FaceSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItemButton>


        </List>
      </Drawer>
    </Box>
  );
}