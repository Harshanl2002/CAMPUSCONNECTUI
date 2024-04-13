import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { CgMenuMotion } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

export default function MyDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <Box sx={{height:100}}>

        </Box>
      <List>
        <ListItem>
            <NavLink className={({ isActive }) => (isActive ? 'text-orange-400 transition-all' : 'text-black transition-all')} to="/">Home</NavLink>
        </ListItem>
        <ListItem>
            <NavLink className={({ isActive }) => (isActive ? 'text-orange-400 transition-all' : 'text-black transition-all')} to="/about">About</NavLink>
        </ListItem>
        <ListItem>
            <NavLink className={({ isActive }) => (isActive ? 'text-orange-400 transition-all' : 'text-black transition-all')} to="/contact">Contact</NavLink>
        </ListItem>
        <ListItem>
            <NavLink className={({ isActive }) => (isActive ? 'text-orange-400 transition-all' : 'text-black transition-all')} to="/pricing">Pricing</NavLink>
        </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem className='flex justify-center w-[250px]'>
            <NavLink to={"/login"} className="bg-orange-400 rounded-[5px] px-5 py-2 text-white shadow-xl font-sans font-semibold hover:bg-orange-600 hover:outline-1 hover:outline-orange-500">Login</NavLink>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)} className='px-5 py-2 text-orange-400 text-2xl font-bold'><CgMenuMotion/></button>
      <Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}