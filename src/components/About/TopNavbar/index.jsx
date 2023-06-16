// import { Grid, useSelector, useDispatch } from '../../utils/exports'
// import Avatar from '@mui/material/Avatar';
// import { deepOrange } from '@mui/material/colors';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import { ListDrawer } from './List';
// import { registerDrawerOpen } from '../../redux/navbarSlice';
// import { useAuth } from '../../hooks/useAuth';
// import { Typing } from '../Helpers';



// function TopNavbar() {
//     const dispatch = useDispatch();
//     const userInfo = useAuth();
//     const { drawerOpen } = useSelector(state => state.navbar);
//     const toggleDrawer = (open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }
//         dispatch(registerDrawerOpen(open));
//     };
//     return (
//         <>
//             <div id="top-navbar">
//                 <br />
//                 <Grid container>
//                     <Grid item xs={4}>
//                         <Typing content='I am Clinto Abraham' />
//                         {/* <h1>I am Clinto.</h1> */}
//                     </Grid>
//                     <Grid item xs={1}>
//                         <p>Home</p>
//                     </Grid>
//                     <Grid item xs={1}>
//                         <p>Projects</p>
//                     </Grid>
//                     <Grid item xs={6} align={'right'}>
//                         <Button onClick={toggleDrawer(true)}>
//                             <Avatar
//                                 sx={{ bgcolor: deepOrange[500] }}
//                                 alt={userInfo?.displayName}
//                                 src={userInfo?.photoURL}
//                             >
//                                 {userInfo?.displayName?.slice(0, 1)}
//                             </Avatar>
//                         </Button>
//                         <Drawer
//                             anchor={'right'}
//                             open={drawerOpen}
//                             onClose={toggleDrawer(false)}
//                         >
//                             {ListDrawer('right')}
//                         </Drawer>

//                     </Grid>
//                 </Grid>
//             </div>
//         </>
//     );
// }

// export default TopNavbar;


