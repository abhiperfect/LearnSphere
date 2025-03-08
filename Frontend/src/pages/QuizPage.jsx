import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import OnboardingQuiz from "../components/OnboardingQuiz";
import StickyHeader from "../shared/StickyHeader";
import classifyUser from "../utils/classfyUser";

export default function QuizPage() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userClassification, setUserClassification] = useState("");

  const handleQuizFinish = (answers) => {
    setUserAnswers(answers);
    setQuizCompleted(true);
  };

  const handleUserClassification = () => {
    const userClassification = classifyUser(userAnswers);
    setUserClassification(userClassification);
    console.log(userClassification);
  } 

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          // bgcolor: "#11436d",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          // alignItems: 'center'
        }}
      >
        <StickyHeader />
        <Container maxWidth={false} width="100%">
          {!quizCompleted ? (
            <OnboardingQuiz onFinish={handleQuizFinish} />
          ) : (
            <Paper sx={{ p: 4, textAlign: "center", boxShadow: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                Quiz Completed!
              </Typography>
              <Typography variant="body1">
                Thanks for taking the quiz.
              </Typography>
              <Typography variant="body1">
                Your answers: {JSON.stringify(userAnswers)}
              </Typography>
              <Typography variant="body1">
                Your classification: {userClassification}
              </Typography>
              <Typography variant="body1">
                <button onClick={handleUserClassification}>Classify User</button>
              </Typography>
            </Paper>
          )}
        </Container>
      </Box>
    </React.Fragment>
  );
}
