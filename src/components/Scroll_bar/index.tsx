import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Button, Grid } from "@mui/material";
const Scrollbar = () => {
  const handleScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Grid className="scroll">
      <Button variant="outlined" onClick={handleScroll} color="secondary">
        <KeyboardDoubleArrowUpIcon color="secondary" className={'icon'} />
      </Button>
    </Grid>
  );
};

export default Scrollbar;
