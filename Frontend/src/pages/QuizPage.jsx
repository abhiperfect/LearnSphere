import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import OnboardingQuiz from "../components/OnboardingQuiz";
import StickyHeader from "../shared/StickyHeader";
import classifyUser from "../utils/classfyUser";
import { useNavigate } from "react-router-dom";

export default function QuizPage() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userClassification, setUserClassification] = useState("");
  const navigate = useNavigate();

  const handleQuizFinish = (answers) => {
    console.log("Answers Array: ",answers);
    const userClassification = classifyUser(answers);
    console.log("User Classification: ", userClassification);
    setUserClassification(userClassification);
    setUserAnswers(answers);
    setQuizCompleted(true);
    navigate("/results", { state: { userClassification, answers } });
  };

  // const handleUserClassification = (answers) => {
  //   const userClassification = classifyUser(answers);
  //   setUserClassification(userClassification);
  //   return userClassification;
  //   // console.log("UserClassification: ", userClassification);
  // } 

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
        <StickyHeader title="Quizs 🙂‍↔️" />
        <Container maxWidth={false} width="100%">
          {!quizCompleted ? (
            <OnboardingQuiz onFinish={handleQuizFinish} />
          ) : (


            <Paper sx={{ p: 4, textAlign: "center", boxShadow: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                Quiz Completed!
              </Typography>
              {/* <Typography variant="body1">
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
              </Typography> */}
            </Paper>
          )}
        </Container>
      </Box>
    </React.Fragment>
  );
}
