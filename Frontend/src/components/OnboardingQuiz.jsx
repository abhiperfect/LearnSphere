import { useState } from "react";
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography, Paper, Container } from "@mui/material";
import toast from "react-hot-toast";
const quizData = [
  {
      question: "🔍 How do you prefer to learn something new?",
      options: ["🎥 Short Videos", "📖 Reading Articles", "🎮 Playing Games", "🎧 Listening to Podcasts", "🛠️ Hands-On Practice"],
      answer: { type: "learningStyle", value: "Varies" }
  },
  {
      question: "⚡ What keeps you engaged while learning?",
      options: ["🎬 Visuals & explainer videos", "📜 Reading step-by-step guides", "🏆 Quizzes & interactive games", "🎙️ Listening to experts", "🔧 Practical application"],
      answer: { type: "learningStyle", value: "Varies" }
  },
  {
      question: "🧠 If you’re stuck on a difficult topic, what do you do?",
      options: ["📹 Watch a video tutorial", "📑 Read a blog or article", "🎯 Solve a quiz or challenge", "🎧 Listen to a podcast", "🛠️ Try solving it practically"],
      answer: { type: "problemSolvingApproach", value: "Varies" }
  },
  {
      question: "📚 How do you like to revise a topic you’ve already learned?",
      options: ["🎥 Watch a recap video", "📝 Read notes or a summary", "🎮 Play a game-based quiz", "🎙️ Listen to an audio summary", "🔬 Apply it to real-world scenarios"],
      answer: { type: "revisionPreference", value: "Varies" }
  },
  {
      question: "🎯 What type of learning format do you enjoy the most?",
      options: ["📺 Short, engaging videos", "📜 Detailed text-based explanations", "🎲 Games & interactive puzzles", "🎤 Listening to real-life stories", "⚒️ Hands-on exercises"],
      answer: { type: "contentPreference", value: "Varies" }
  },
  {
      question: "💡 If you need to understand a complex concept, what do you prefer?",
      options: ["📹 Watch an animated explainer video", "📚 Read a structured guide", "🧩 Solve an interactive puzzle", "🎙️ Listen to expert discussions", "🛠️ Experiment and learn by doing"],
      answer: { type: "learningDepth", value: "Varies" }
  },
  {
      question: "🛠️ If you could only pick one way to learn, what would it be?",
      options: ["🎬 Watching tutorial videos", "📖 Reading in-depth articles", "🎮 Playing interactive games", "🎧 Listening to audio content", "🔧 Doing hands-on practice"],
      answer: { type: "primaryLearningStyle", value: "Varies" }
  },
  {
      question: "🖥️ You want to learn a new software tool. How do you start?",
      options: ["📺 Watch a YouTube tutorial", "📚 Read the official documentation", "🎯 Use an interactive simulation", "🎙️ Listen to a podcast about its features", "🔍 Start using it immediately"],
      answer: { type: "learningApproach", value: "Varies" }
  },
  {
      question: "🚀 What excites you the most when learning something new?",
      options: ["🎥 Seeing things in action through visuals", "📜 Understanding details through text", "🏆 Making learning fun with challenges", "🎙️ Hearing real-world insights", "🛠️ Applying knowledge practically"],
      answer: { type: "motivationFactor", value: "Varies" }
  },
  {
      question: "🔥 How do you stay motivated while learning?",
      options: ["🎥 Engaging videos that simplify concepts", "📖 Well-structured reading materials", "🎮 Leveling up in a game", "🎧 Listening to thought-provoking discussions", "🏗️ Working on real-world applications"],
      answer: { type: "engagementFactor", value: "Varies" }
  }
];


const OnboardingQuiz = ({ onFinish }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
    const notify = (msg) => toast.error(msg);
    const notifySuccess = (msg) => toast.success(msg);
    const notifyInfo = (msg) => toast(msg, {icon: '👏',});

    const handleNext = () => {
        if (selectedOption !== null) {
            const newAnswers = [...answers];
            newAnswers[currentQuestion] = selectedOption;
            setAnswers(newAnswers);
            setSelectedOption(null);
            if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                notifySuccess("Answer submitted successfully!");
            } else {
                onFinish(newAnswers);
                notifyInfo("Quiz completed successfully!");
            }
        } else {
            notify("Please select an option.");
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(answers[currentQuestion - 1]); // Restore previous answer
        }
    };

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#ffffff"
                }}
            >
                <Paper sx={{ p: 4, width: "100%", maxWidth: 600, textAlign: "center", boxShadow: 3 }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        Quiz {currentQuestion + 1} / {quizData.length}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        {quizData[currentQuestion].question}
                    </Typography>

                    <FormControl component="fieldset">
                        <RadioGroup
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(String(e.target.value))}
                        >
                            {quizData[currentQuestion].options.map((option, index) => (
                                <FormControlLabel 
                                    key={index}
                                    value={option}
                                    control={<Radio />}
                                    label={option}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>

                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={handlePrevious} 
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={handleNext}
                        >
                            {currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default OnboardingQuiz;
