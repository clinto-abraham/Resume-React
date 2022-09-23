import { FootNavbar } from './Fragments/FootNavbar';
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Paper, Typography, Grid } from "@mui/material";

export default function Footer() {
  return (
    <>
      <FootNavbar />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            width: "100%",
            backgroundColor: "black",
            color: "white",
            height: "2.2rem",
            padding: "1rem",
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="caption" display="block" gutterBottom>
                {" "}
                Copyright © The Top Of Cliff Developers - All Rights Reserved.{" "}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" display="block" gutterBottom>
                {" "}
                ™ 2020 - {new Date().getFullYear()} Clinto Ayamkudiyil.{" "}
              </Typography>
            </Grid>
          </Grid>
        </BottomNavigation>
      </Paper>
    </>
  );
}
