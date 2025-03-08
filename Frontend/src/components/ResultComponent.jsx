import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent, List, ListItem, ListItemText, Button, Alert } from "@mui/material";
import StickyHeader from "../shared/StickyHeader"; // Ensure this is correctly placed

const ResultComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userClassification, answers } = location.state || {};

    if (!userClassification || !answers) {
        console.error(`User classification or answers not found.`, { userClassification, answers });
        return <Typography variant="h6" color="error">⚠️ No results found. Please complete the quiz.</Typography>;
    }
    const mp = new Map();
    mp.set("video", "Video Learner");
    mp.set("interactive", "Game Learner");
    mp.set("handsOn", "Hands-On Learner");
    mp.set("audio", "Audio Learner");
    mp.set("reading", "Text Learner");
    // Define next quiz format based on user type
    console.log( "User Classification: ", typeof userClassification);
    console.log( "Mapped: ",mp.get(userClassification));
    const nextQuizPath = {
        "Video Learner": "/quiz/video",
        "Game Learner": "/quiz/game",
        "Hands-On Learner": "/quiz/hands-on",
        "Audio Learner": "/quiz/audio",
        "Text Learner": "/quiz/text",
    }[mp.get(userClassification)] || "/quiz/text";

    return (
        <>
            <StickyHeader title="🏆 Quiz Results" /> {/* ✅ Now outside the Box! */}

            <Box sx={{ maxWidth: 600, mx: "auto", mt: 4, p: 2 }}>
                <Alert severity="success" sx={{ mb: 3 }}>
                    🎉 You are classified as: <strong>{userClassification}</strong>
                </Alert>

                <Card sx={{ mb: 3 }}>
                    <CardContent>
                        <Typography variant="h6">📝 Summary of Your Choices:</Typography>
                        <List>
                            {answers.map((answer, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={`✔️ ${answer}`} />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>

                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    onClick={() => navigate(nextQuizPath)}
                >
                    🎯 Take Your Next Quiz in {userClassification} Format!
                </Button>
            </Box>
        </>
    );
};

export default ResultComponent;
