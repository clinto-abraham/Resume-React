import * as React from "react";
import { styled } from "@mui/material/styles";
import { Typography, ButtonBase, Box} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const images = [
  {
    src: '../../../Assets/cave.jpg',
    title: "Hire me",
    width: "40%",
    URL_ROUTE: "/hire-me",
  },
  {
    src: "../../../Assets/stone-ladder.jpg",
    title: "I want a website",
    width: "30%",
    URL_ROUTE: "/website-requirement",
  },
  {
    src: "../../../Assets/cave.jpg",
    title: "About Me",
    width: "30%",
    URL_ROUTE: "/",
  },
];
export const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: "3rem",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));
export const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});
export const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: '15rem',
  right: 0,
  top: 120,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));
export const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.2,
  transition: theme.transitions.create("opacity"),
}));
export const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 20,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const NavigationButtonBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
      }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={async(e) => {
            if(e.target.innerText==='ABOUT ME'){
              await navigate(image.URL_ROUTE)
               window.scroll({
                top: 1380,
                left: 0,
                behavior: 'smooth'
              });
            } else {
              await navigate(image.URL_ROUTE)
               window.scroll({
                top: 800,
                left: 0,
                behavior: 'smooth'
              });
            }
            
            console.log(e.target.innerText==='ABOUT ME')
          }
        }
        >
          <ImageSrc
            style={{
              backgroundImage: `url(${image.src})`,
            }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title.toUpperCase()}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
};
export default NavigationButtonBar;
