import React from "react";
import { useNavigate } from 'react-router-dom'
import { Paper, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GavelIcon from "@mui/icons-material/Gavel";
import PolicyIcon from "@mui/icons-material/Policy";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import AndroidIcon from "@mui/icons-material/Android";
import Button, { ButtonProps } from "@mui/material/Button";
import { cyan } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "white",
    backgroundColor: "transparent",
    margin: 10,
    minWidth: "10rem",
    "&:hover": {
      backgroundColor: cyan[700],
    },
  }));

export function FootNavbar() {
  const navigate = useNavigate()
  return (
    <Paper
      sx={{
        backgroundColor: "black",
        minHeight: 500,
        color: "white",
      }}
    >
      <Grid container>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <ColorButton startIcon={<InfoIcon />}> About</ColorButton>
          </Grid>
          <Grid item xs={12}>
            <ColorButton startIcon={<AlternateEmailIcon />}>
              Email Us
            </ColorButton>
          </Grid>
          <Grid item xs={12}>
            <ColorButton startIcon={<SchoolIcon />}>Education</ColorButton>
          </Grid>
          <Grid item xs={12}>
            <ColorButton startIcon={<MiscellaneousServicesIcon />}>
              Engineering Services
            </ColorButton>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <ColorButton startIcon={<AndroidIcon />}>
                Download android mobile App
              </ColorButton>
            </Grid>
            <ColorButton startIcon={<GavelIcon />}>
              Terms & Conditions
            </ColorButton>
          </Grid>
          <Grid item xs={12}>
            <ColorButton startIcon={<PolicyIcon />}>Privacy Policy</ColorButton>
          </Grid>
          <Grid item xs={12}>
            <ColorButton startIcon={<NoteAltIcon />}> Notice</ColorButton>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={12}>
            <ColorButton startIcon={<GitHubIcon />}>Github</ColorButton>
          </Grid>
          <Grid item xs={12}>
            <ColorButton startIcon={<TwitterIcon />}>LinkedIn</ColorButton>
          </Grid>
          <Grid item xs={12}>
            <ColorButton startIcon={<LinkedInIcon />}>Twitter</ColorButton>
          </Grid>
          <Grid item xs={12}>
            <ColorButton startIcon={<PrecisionManufacturingIcon />} onClick={() => navigate('/projects')}>
              Projects
            </ColorButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
