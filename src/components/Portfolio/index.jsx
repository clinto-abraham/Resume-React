import {
    Paper,
    useDispatch, useSelector,
    Box, BottomNavigation, BottomNavigationAction, Grid, Typography, Button,
    FavoriteIcon, RestoreIcon, LocationOnIcon, GitHubIcon, LinkedInIcon, TwitterIcon, LightbulbIcon, GavelIcon, PolicyIcon, StarsIcon, AccountTreeIcon, LayersIcon, ThumbUpIcon, CommentIcon, HomeIcon,
} from '../../Utils/exports'
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { registerModalToggle } from '../../Redux/portfolioSlice';
import ModalPortfolio from './modalPortfolio';

export default function Portfolio() {
    const dispatch = useDispatch()
    const handleModal = (e) => {
        dispatch(registerModalToggle(true))
        console.log('clicked')
    }
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ModalPortfolio />
            <Button variant='text' onClick={handleModal}>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
            </Button>
            <Button variant='text' onClick={handleModal}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
            </Button>
            <Button variant='text' onClick={handleModal}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
            </Button>

            <Tooltip title="Delete">
                <Button variant='text' onClick={handleModal}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    </ListItem>
                </Button>
            </Tooltip>
        </List>
    );
}




