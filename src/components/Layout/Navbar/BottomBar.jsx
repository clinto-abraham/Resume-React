/* eslint-disable react/jsx-key */
import { registerSelected } from "../../../redux/footerSlice";
import {
  // Link, useNavigate,
  useSelector,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Typography,
  Button,
  FavoriteIcon,
  RestoreIcon,
  LocationOnIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  LightbulbIcon,
  GavelIcon,
  PolicyIcon,
  StarsIcon,
  AccountTreeIcon,
  LayersIcon,
  ThumbUpIcon,
  CommentIcon,
  HomeIcon,
  useDispatch,
  PropTypes,
} from "../../../utils/commons";

const Icons = [
  <GitHubIcon sx={{ color: "white" }} />,
  <LinkedInIcon sx={{ color: "white" }} />,
  <TwitterIcon sx={{ color: "white" }} />,
  <LayersIcon sx={{ color: "white" }} />,
  <StarsIcon sx={{ color: "white" }} />,
  <PolicyIcon sx={{ color: "white" }} />,
  <GavelIcon sx={{ color: "white" }} />,
  <LightbulbIcon sx={{ color: "white" }} />,
  <CommentIcon sx={{ color: "white" }} />,
  <ThumbUpIcon sx={{ color: "white" }} />,
  <AccountTreeIcon sx={{ color: "white" }} />,
  <HomeIcon sx={{ color: "white" }} />,
];

const FooterItemsComponent = (props) => {
  const { name, index } = props;
  return (
    <Grid item xs={6} sm={6} lg={4} xl={4} md={4}>
      {/* <Link
                to={url}
                target={target}
                rel={rel}
                className={'Link-React-Router'}
            > */}
      <Button
        sx={{ justifyContent: "flex-start", margin: "0.2rem 4.5rem" }}
        variant={"text"}
        fullWidth
      >
        {Icons[index]}
        <Typography
          sx={{
            margin: "0.5rem 1rem",
            textDecorationLine: "none",
            color: "white",
          }}
        >
          {name}
        </Typography>
      </Button>
      {/* </Link> */}
    </Grid>
  );
};

FooterItemsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const FooterNavbar = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selected, currentYear, footerItems } = useSelector(
    (state) => state.footer
  );
  return (
    <>
      <Grid
        container
        sx={{
          padding: "1rem",
          margin: "0rem",
          backgroundColor: "black",
          color: "white",
          textDecoration: "none",
          display: "flex",
          justifyContent: "left",
        }}
      >
        {footerItems.map((item, index) => (
          <FooterItemsComponent
            key={index}
            name={item.name}
            url={item.url}
            target={item.target}
            rel={item.rel}
            index={index}
          />
        ))}

        <Box sx={{ width: "100%" }}>
          <BottomNavigation
            showLabels
            sx={{ backgroundColor: "transparent", color: "white" }}
          >
            <BottomNavigationAction
              // onClick={() => navigate('privacy-&-policy')}
              label="Privacy & Policy"
              icon={<RestoreIcon />}
              sx={{ color: "white" }}
            />
            <BottomNavigationAction
              onClick={() => dispatch(registerSelected(!selected))}
              label="Favorites"
              icon={<FavoriteIcon />}
              sx={{ color: selected ? "red" : "white" }}
            />
            <BottomNavigationAction
              // onClick={() => navigate('terms-of-service')}
              label="Terms of service"
              icon={<LocationOnIcon />}
              sx={{ color: "white" }}
            />
          </BottomNavigation>
          <Grid
            container
            direction="column"
            sx={{ padding: "0.2rem", margin: "1.5rem" }}
          >
            <Grid item>
              <Typography
                align="center"
                sx={{ margin: "0.2rem 0rem", color: "white" }}
              >
                Developed by Clinto Abraham A.
              </Typography>
              <Typography
                align="center"
                sx={{ margin: "0.2rem 0rem", color: "white" }}
              >
                Powered by - Top Of Cliff
              </Typography>
              <Typography
                align="center"
                sx={{ margin: "0.2rem 0rem", color: "white" }}
              >
                {" "}
                @ 2020 - {currentYear}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default FooterNavbar;
