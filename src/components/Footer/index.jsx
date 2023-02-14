import { Link, useNavigation } from "react-router-dom";
import { registerSelected } from '../../redux/footerSlice';
import {
  // Link,
  // useRouter,
  useDispatch, useSelector,
  Box, BottomNavigation, BottomNavigationAction, Grid, Typography, Button,
  FavoriteIcon, RestoreIcon, LocationOnIcon, GitHubIcon, LinkedInIcon, TwitterIcon, LightbulbIcon, GavelIcon, PolicyIcon, StarsIcon, AccountTreeIcon, LayersIcon, ThumbUpIcon, CommentIcon, HomeIcon,
} from '../../Utils/exports'
// import { registerSelected } from '../../redux/utilsSlice';

const Icons = [
  <GitHubIcon />,
  <LinkedInIcon />,
  <TwitterIcon />,
  <LayersIcon />,
  <StarsIcon />,
  <PolicyIcon />,
  <GavelIcon />,
  <LightbulbIcon />,
  <CommentIcon />,
  <ThumbUpIcon />,
  <AccountTreeIcon />,
  <HomeIcon />,
]

const FooterItemsComponent = (props) => {
  const { name, url, target, rel, index } = props;
  return (
    <Grid item xs={6} sm={6} lg={4} xl={4} md={4}>
      <Link
        to={url}
        target={target}
        rel={rel}
      >
        <Button variant={'filled'}>
          {Icons[index]}
          <Typography align='left' sx={{ margin: '0rem 1rem' }}>
            {name}
          </Typography>
        </Button>
      </Link>
    </Grid>
  )
}
const FooterNavbar = () => {
  const router = useNavigation();
  const dispatch = useDispatch()
  const { selected, currentYear, footerItems } = useSelector(state => state.footer)

  return (
    <>
      <Grid container sx={{ padding: '2.2rem 1.2rem', margin: '2.5rem', display: 'flex', justifyContent: 'center' }}>
        {footerItems.map((item, index) => (
          <FooterItemsComponent
            key={index}
            name={item.name}
            url={item.url}
            target={item.target}
            rel={item.rel}
            index={index}
          />)
        )}
      </Grid>
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          // value={value}
          // onChange={(event, newValue) => setValue(newValue)}
          sx={{ backgroundColor: 'transparent', color: 'white' }}
        >
          <BottomNavigationAction onClick={() => router.push('privacy-&-policy')} label='Privacy & Policy' icon={<RestoreIcon />} sx={{ color: 'white' }} />
          <BottomNavigationAction onClick={() => dispatch(registerSelected(!selected))} label='Favorites' icon={<FavoriteIcon />} sx={{ color: selected ? 'red' : 'white' }} />
          <BottomNavigationAction onClick={() => router.push('terms-of-service')} label='Terms of service' icon={<LocationOnIcon />} sx={{ color: 'white' }} />
        </BottomNavigation>
        <Grid container direction='column' sx={{ padding: '0.2rem', margin: '1.5rem', }}>
          <Grid item>
            <Link
              href='https://clinto.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Typography align='center'>Developed by Clinto Abraham Ayamkudiyil</Typography>
              <Typography align='center'>Powered by - Top Of Cliff</Typography>
              <Typography align='center'> @ 2022 - {currentYear}</Typography>
            </Link>
          </Grid>

        </Grid>

      </Box>
    </>
  )
}

export default FooterNavbar;

// import React from "react";
// import { icons } from '../../Utils/Icons';

// export function Footer({ CreateIconsCards }) {
//   return (
//     <>
//       {icons.map(CreateIconsCards)}
//       <p className="copyright">
//         Copyright © The Top Of Cliff Developers - All Rights Reserved.
//       </p>
//       <p className="copyright">
//         © 2020 - {new Date().getFullYear()} Clinto Ayamkudiyil.
//       </p>
//     </>
//   );
// }
