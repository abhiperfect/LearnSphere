import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const StickyHeader = ({title = 'My Sticky Header'}) => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Container maxWidth="lg">
          <Typography variant="h6">{title}</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default StickyHeader;
