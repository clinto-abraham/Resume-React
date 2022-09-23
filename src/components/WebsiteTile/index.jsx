import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import SME from "../../Assets/SME.png";
import Admin_Dashboard from "../../Assets/Admin_Dashboard.png";
import Error404 from "../../Assets/Error404.png";
import SI from "../../Assets/SItracker.png";
import ADMIN_FORUM_2 from "../../Assets/Admin_Forum2.png";
import ADMIN_FORUM_1 from "../../Assets/AdminForum1.png";
import REACT_TEMPLATE from "../../Assets/REACT_TEMPLATE.png";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const WebsiteTile = () => {
  return (
    <ImageList
      sx={{
        margin: 30,
        transform: "translateZ(0)",
      }}
      rowHeight={300}
      gap={3}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem
            key={item.img}
            cols={cols}
            rows={rows}
            onClick={() => window.open(item.url)}
          >
            <img
              {...srcset(item.img, 250, 100, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${item.title}`}
                ></IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default WebsiteTile;

const itemData = [
  {
    img: REACT_TEMPLATE,
    title: "REACT BOILERPLATE",
    url: "https://react-js-template.netlify.app/",
    author: "@clinto92",
    featured: true,
  },
  {
    img: ADMIN_FORUM_2,
    title: "Admin Forum",
    url: "https://admin-forum.netlify.app/",
    author: "@clinto92",
    featured: true,
  },
  {
    img: SME,
    title: "SME",
    url: "https://sabri-marine-enterprise.netlify.app/",
    author: "@clinto92",
    featured: true,
  },
  {
    img: SI,
    title: "SI Tracker",
    url: "https://si-tracker.netlify.app/",
    author: "@clinto92",
    featured: true,
  },
  {
    img: ADMIN_FORUM_1,
    title: "REACT BOILERPLATE",
    url: "https://online-edu-forum.netlify.app/",
    author: "@clinto92",
    featured: true,
  },
  {
    img: Error404,
    title: "404",
    url: "https://admin-forum.netlify.app/test/404",
    author: "@clinto92",
    featured: true,
  },
  {
    img: Admin_Dashboard,
    title: "Admin_Dashboard",
    url: "https://admin-forum.netlify.app/test/404",
    author: "@clinto92",
    featured: true,
  },
];
