import {
    useEffect,
    useState,
    Button, CircularProgress, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Paper, Grid,
    useDispatch, useSelector,
    PhoneAndroidIcon, AttachEmailIcon, MailLockIcon, ExpandMoreIcon, MoreVertIcon,
    styled,
    red,
} from '../../utils/exports'
import { registerUser } from '../../redux/loginSlice';
import { initialLocalState } from '../../utils/UserInitialData';
import WordOfGod from '../WordOfGod';
import { useAuth } from '../../hooks/useAuth';
import {
    signInWithGooglePopup,
    // signInWithGoogleRedirect 
} from '../../Utils/Firebase';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const Profile = () => {
    const dispatch = useDispatch();
    const userInfo = useAuth();
    const { user: { isAnonymous } } = useSelector(state => state.user)
    const [loading, setLoading] = useState(false);
    const handleGoogleSignIn = () => {
        setLoading(true);
        signInWithGooglePopup();
        // signInWithGoogleRedirect();
    };

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        if (userInfo?.isAnonymous === undefined) {
            dispatch(registerUser(initialLocalState?.user))
        } else if (userInfo?.isAnonymous === false) {
            dispatch(registerUser({
                accessToken: userInfo?.accessToken,
                displayName: userInfo?.displayName,
                email: userInfo?.email,
                emailVerified: userInfo?.emailVerified,
                isAnonymous: userInfo?.isAnonymous,
                phoneNumber: userInfo?.phoneNumber,
                photoURL: userInfo?.photoURL,
                providerId: userInfo?.providerId,
                tenantId: userInfo?.tenantId,
                uid: userInfo?.uid
            }))
        }
    }, [userInfo?.isAnonymous])

    useEffect(() => {
        if (!isAnonymous) {
            setLoading(false)
        }
    }, [isAnonymous])

    return (
        <Grid container direction='column'>
            {/* <Grid item> */}
            <Paper elevation={23} sx={{ backgroundColor: 'transparent', padding: '1rem 0.2rem', margin: 'auto' }}>
                <Card sx={{ minWidth: 375, maxWidth: 500, }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {userInfo?.displayName.slice(0, 1)}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={userInfo?.displayName}
                        subheader={userInfo?.emailVerified ? 'Verified' : 'Not verified'}
                    />
                    <CardMedia
                        component="img"
                        height='500'
                        image={userInfo?.photoURL}
                        alt={userInfo?.displayName}
                    />
                    <CardContent>
                        <WordOfGod
                            color='text.secondary'
                            size='0rem'
                        />
                        <Typography variant="body2" color="text.secondary">
                            <MailLockIcon /> :
                            {userInfo?.email}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <PhoneAndroidIcon /> {userInfo?.phoneNumber}
                        </IconButton>
                        <IconButton aria-label="share">
                            <AttachEmailIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Verified users will be allowed to see all the projects and its associated code from github.
                            </Typography>
                            <Typography paragraph>
                                Your kind feedback means a lot for continuous improvement in UI and content development. Hope you had a good time here! If you find any query, feel free to ping me on my email clinto92@gmail.com
                            </Typography>
                            <Typography paragraph>
                                Please subscribe to get the latest update in all the projects and coming version of this web application.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Paper>
            {/* </Grid> */}
            <Paper elevation={23} sx={{ backgroundColor: 'white', margin: 'auto' }}>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={!isAnonymous}
                >
                    <img
                        width="40"
                        height="40"
                        src={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                        }
                        alt="Google"
                    />
                    {loading ? (
                        <CircularProgress color="inherit" />
                    ) : (" Sign In with Google"
                    )
                    }
                </Button>
            </Paper>

        </Grid>
    )
}

export default Profile

