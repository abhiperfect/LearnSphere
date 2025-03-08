import React from "react";
import { Box, Typography, Button } from "@mui/material";

const AudioQuizComponent = () => {
    return (
        <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 2 }}>
            <Typography variant="h4">🎙️ Audio-Based Quiz</Typography>
            <audio controls>
                <source src="quiz-audio.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <Button variant="contained" color="success" fullWidth sx={{ mt: 2 }}>
                Submit Answer
            </Button>
        </Box>
    );
};

export default AudioQuizComponent;
