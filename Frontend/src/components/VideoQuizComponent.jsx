import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, Alert } from "@mui/material";
import StickyHeader from "../shared/StickyHeader";
// Video quiz questions with correct answers
const videoQuestions = [
    {
        id: 1,
        question: "What shape did the barista create in the coffee?",
        videoSrc: "video1.mp4",
        options: ["Heart", "Leaf", "Spiral", "Circle"],
        correctAnswer: "Heart",
    },
    {
        id: 2,
        question: "What was the biggest safety risk in this situation?",
        videoSrc: "video2.mp4",
        options: ["Ignoring traffic signals", "Being distracted by phone", "Not looking before crossing", "Walking too fast"],
        correctAnswer: "Being distracted by phone",
    },
    {
        id: 3,
        question: "What is the first step in tying this shoelace method?",
        videoSrc: "video3.mp4",
        options: ["Make a small loop", "Cross the laces over", "Pull lace through hole", "Tuck lace ends"],
        correctAnswer: "Cross the laces over",
    },
    {
        id: 4,
        question: "What happened right before the plant sprouted leaves?",
        videoSrc: "video4.mp4",
        options: ["Roots spread underground", "Plant absorbed water", "Sun caused it to grow taller", "Wind helped it grow"],
        correctAnswer: "Plant absorbed water",
    },
    {
        id: 5,
        question: "What is the most important step before removing the tire?",
        videoSrc: "video5.mp4",
        options: ["Placing car on flat surface", "Loosening lug nuts", "Using car jack correctly", "Checking air pressure"],
        correctAnswer: "Loosening lug nuts",
    },
];

// Function to get a random answer
const getRandomAnswer = (options) => options[Math.floor(Math.random() * options.length)];

const VideoQuizComponent = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [results, setResults] = useState(null);
    const [videoWatched, setVideoWatched] = useState(new Array(videoQuestions.length).fill(false));

    // Initialize answers randomly
    useEffect(() => {
        const randomAnswers = videoQuestions.map((q) => getRandomAnswer(q.options));
        setAnswers(randomAnswers);
    }, []);

    // Handle MCQ selection
    const handleOptionChange = (event) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = event.target.value;
        setAnswers(updatedAnswers);
    };

    // Navigate questions
    const handleNext = () => {
        if (currentQuestion < videoQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    // Track video completion
    const handleVideoEnd = () => {
        const updatedWatched = [...videoWatched];
        updatedWatched[currentQuestion] = true; // Mark video as watched
        setVideoWatched(updatedWatched);
    };

    // Submit answers and generate report
    const handleSubmit = () => {
        const score = answers.reduce(
            (acc, answer, index) => (answer === videoQuestions[index].correctAnswer ? acc + 1 : acc),
            0
        );

        const videoWatchedCount = videoWatched.filter((watched) => watched).length;
        setResults({ score, videoWatchedCount });
    };

    return (
      <>
        <StickyHeader title="🎥 Video Quiz" />
        <Box
            sx={{
                maxWidth: 800,
                width: "100vw",
                height: "100vh",
                mx: "auto",
                p: 4,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#f4f4f4",
                mt: 2,
            }}
        >
            {!results ? (
                <>
                    <Typography variant="h5" gutterBottom>
                        🎥 Question {currentQuestion + 1} of {videoQuestions.length}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {videoQuestions[currentQuestion].question}
                    </Typography>

                    {/* Video Player */}
                    <video key={currentQuestion} controls width="80%" onEnded={handleVideoEnd}>
                        <source src={videoQuestions[currentQuestion].videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Answer Options */}
                    <Box mt={2}>
                        <RadioGroup value={answers[currentQuestion]} onChange={handleOptionChange}>
                            {videoQuestions[currentQuestion].options.map((option, index) => (
                                <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                            ))}
                        </RadioGroup>
                    </Box>

                    {/* Navigation Buttons */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3, width: "80%", mx: "auto" }}>
                        <Button variant="contained" color="secondary" onClick={handlePrevious} disabled={currentQuestion === 0}>
                            Previous
                        </Button>
                        {currentQuestion < videoQuestions.length - 1 ? (
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                Next
                            </Button>
                        ) : (
                            <Button variant="contained" color="success" onClick={handleSubmit}>
                                Submit Quiz
                            </Button>
                        )}
                    </Box>
                </>
            ) : (
                // Show User Report
                <Box>
                    <Typography variant="h4" color="primary">
                        📊 User Report
                    </Typography>
                    <Alert severity="info" sx={{ mt: 2 }}>
                        🎯 You scored {results.score} out of {videoQuestions.length}!
                    </Alert>

                    {/* Detect Video Engagement */}
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        {results.videoWatchedCount >= 3 
                            ? "🎉 You are a Video Learner! You enjoy learning through videos." 
                            : "📚 You prefer other learning styles."}
                    </Typography>

                    <Typography variant="h5" sx={{ mt: 3 }}>📝 Quiz Answers</Typography>
                    {videoQuestions.map((q, index) => (
                        <Typography key={q.id} sx={{ mt: 1 }}>
                            {index + 1}. {q.question}  
                            <br />
                            <strong>🡆 Your Answer:</strong> {answers[index]}
                            <br />
                            <strong>✅ Correct Answer:</strong> {q.correctAnswer}
                            <br />
                            <strong>🎬 Video Watched:</strong> {videoWatched[index] ? "✅ Yes" : "❌ No"}
                        </Typography>
                    ))}

                    <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => window.location.reload()}>
                        Restart Quiz
                    </Button>
                </Box>
            )}
        </Box>
        </>
    );
};

export default VideoQuizComponent;
