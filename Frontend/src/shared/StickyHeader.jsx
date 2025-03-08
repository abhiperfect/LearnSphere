import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const StickyHeader = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Container maxWidth="lg">
          <Typography variant="h6">My Sticky Header</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default StickyHeader;
