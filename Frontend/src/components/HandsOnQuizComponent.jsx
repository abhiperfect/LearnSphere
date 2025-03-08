import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HandsOnQuizComponent = () => {
    return (
        <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 2 }}>
            <Typography variant="h4">💻 Hands-On Coding Quiz</Typography>
            <iframe src="https://codepen.io/embed/quiz" width="100%" height="400px" title="Coding Quiz"></iframe>
            <Button variant="contained" color="success" fullWidth sx={{ mt: 2 }}>
                Submit Code
            </Button>
        </Box>
    );
};

export default HandsOnQuizComponent;
