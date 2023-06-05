import {
    List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Box,
    InboxIcon, MailIcon,
    useDispatch,
    // BottomNavigation, BottomNavigationAction, Grid, Typography, Button,
    // FavoriteIcon, RestoreIcon, LocationOnIcon, GitHubIcon, LinkedInIcon, TwitterIcon, LightbulbIcon, GavelIcon, PolicyIcon, StarsIcon, AccountTreeIcon, LayersIcon, ThumbUpIcon, CommentIcon, HomeIcon,
} from '../../utils/exports'
import { registerDrawerOpen } from '../../redux/navbarSlice';

export const ListDrawer = (anchor) => {
    const dispatch = useDispatch();
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        dispatch(registerDrawerOpen(open));
    };
    return (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Profile', 'My Introduction', 'Projects', 'Contact'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Privacy & Policy', 'Terms & Conditions', 'Github', 'License', 'StackOverFlow', 'About'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
};