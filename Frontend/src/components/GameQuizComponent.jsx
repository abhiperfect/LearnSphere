import React, { useState } from "react";
import { Box, Typography, Button, Alert } from "@mui/material";

const gameQuestions = [
    { id: 1, question: "Solve this puzzle to proceed!", gameSrc: "https://example-game.com/quiz1" },
    { id: 2, question: "Win this mini-game to continue!", gameSrc: "https://example-game.com/quiz2" },
    { id: 3, question: "Find the hidden object!", gameSrc: "https://example-game.com/quiz3" },
    { id: 4, question: "Match the pairs to advance!", gameSrc: "https://example-game.com/quiz4" },
    { id: 5, question: "Answer the game-based riddle!", gameSrc: "https://example-game.com/quiz5" }
];

const GameQuizComponent = () => {
    const [currentGame, setCurrentGame] = useState(0);
    const [gameScores, setGameScores] = useState(Array(gameQuestions.length).fill(null));
    const [gamePlayed, setGamePlayed] = useState(Array(gameQuestions.length).fill(false));
    const [report, setReport] = useState(null);

    // Simulate game completion (Replace with actual game API integration)
    const handleGameComplete = () => {
        const randomScore = Math.floor(Math.random() * 10) + 1; // Simulating score out of 10

        const updatedScores = [...gameScores];
        updatedScores[currentGame] = randomScore;
        setGameScores(updatedScores);

        const updatedPlayed = [...gamePlayed];
        updatedPlayed[currentGame] = true;
        setGamePlayed(updatedPlayed);
    };

    // Navigate to next game
    const handleNextGame = () => {
        if (currentGame < gameQuestions.length - 1) {
            setCurrentGame(currentGame + 1);
        }
    };

    // Submit final report
    const handleSubmit = () => {
        const totalScore = gameScores.reduce((acc, score) => acc + (score || 0), 0);
        const averageScore = totalScore / gameQuestions.length;
        const gamesPlayedCount = gamePlayed.filter(Boolean).length;

        // const averageScore = 7;
        // const gamesPlayedCount = 5;


        setReport({
            totalScore,
            averageScore,
            gamesPlayedCount,
            isGameLearner: gamesPlayedCount >= 3 && averageScore >= 6
        });
    };

    return (
        <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, p: 2, textAlign: "center" }}>
            <Typography variant="h5">
                🎮 Game {currentGame + 1} of {gameQuestions.length}
            </Typography>

            <Typography variant="h6" sx={{ mt: 2 }}>
                {gameQuestions[currentGame].question}
            </Typography>

            {/* Game Iframe */}
            <iframe
                src={gameQuestions[currentGame].gameSrc}
                width="100%"
                height="400px"
                title={`Game ${currentGame + 1}`}
                onLoad={() => console.log(`Game ${currentGame + 1} Loaded`)}
            ></iframe>

            {/* Simulate Game Completion */}
            <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleGameComplete}
                disabled={gamePlayed[currentGame]}
            >
                {gamePlayed[currentGame] ? "Completed ✅" : "Submit Answer"}
            </Button>

            {/* Navigation Buttons */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setCurrentGame(currentGame - 1)}
                    disabled={currentGame === 0}
                >
                    Previous
                </Button>
                {currentGame < gameQuestions.length - 1 ? (
                    <Button variant="contained" color="primary" onClick={handleNextGame}>
                        Next
                    </Button>
                ) : (
                    <Button variant="contained" color="success" onClick={handleSubmit} disabled={!gamePlayed.every(Boolean)}>
                        Submit Quiz
                    </Button>
                )}
            </Box>

            {/* Show User Report */}
            {report && (
                <Box sx={{ mt: 3, textAlign: "left" }}>
                    <Typography variant="h4" color="primary">
                        📊 User Report
                    </Typography>
                    <Alert severity="info" sx={{ mt: 2 }}>
                        🎯 You scored {report.totalScore} out of {gameQuestions.length * 10}!
                    </Alert>

                    {/* Detect Game Engagement */}
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        {report.isGameLearner
                            ? "🎉 You are a Game Learner! You engage well with interactive learning."
                            : "🕹️ You might prefer other learning styles."}
                    </Typography>

                    <Typography variant="h5" sx={{ mt: 3 }}>📝 Game Performance</Typography>
                    {gameQuestions.map((q, index) => (
                        <Typography key={q.id} sx={{ mt: 1 }}>
                            {index + 1}. {q.question}  
                            <br />
                            <strong>🡆 Your Score:</strong> {gameScores[index] !== null ? gameScores[index] : "Not Attempted"}
                        </Typography>
                    ))}

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                        onClick={() => window.location.reload()}
                    >
                        Restart Quiz
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default GameQuizComponent;
