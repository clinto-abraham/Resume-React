import NavigationButtonBar from "./Fragments/index";
import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const navigate = useNavigate();
  return (
    <nav id="top-navbar">
      <NavigationButtonBar />
      <Grid container className={"logo"}>
        <Grid item>
          <Button variant="text" onClick={() => navigate("/")}>
            <img
              alt={"Top of Cliff"}
              src={
                "Assets/High-Logo.png" &&
                "https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...aJqRNOkR3FwXs1M3EMoAJtliYujvFq...f47"
              }
            />
          </Button>
        </Grid>
      </Grid>

      <Grid container className={"text"}>
        <Grid item xs={12}>
          <Typography variant="caption" display="block" gutterBottom>
            React.js | Express.js | MongoDB Developer | Salesforce Marketing
            Cloud Email Specialist
          </Typography>
        </Grid>
      </Grid>
    </nav>
  );
};

export default TopNavbar;
