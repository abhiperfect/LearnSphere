import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Fragment } from 'react'
import './App.css'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import QuizPage from "./pages/QuizPage";
import { Toaster } from "react-hot-toast";
import ResultComponent from "./components/ResultComponent";
import VideoQuizComponent from "./components/VideoQuizComponent";
import GameQuizComponent from "./components/GameQuizComponent";
import HandsOnQuizComponent from "./components/HandsOnQuizComponent";
import AudioQuizComponent from "./components/AudioQuizComponent";
import TextQuizComponent from "./components/TextQuizComponent";
import VideoLearner from "./components/VideoLearner";

function App() {

  return (
    <Fragment>
        <Router>
          <AuthProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route 
                    path="/dashboard" 
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    } 
                />
                <Route path="/onboardquiz" element={<QuizPage />} />
                <Route path="/results" element={<ResultComponent />} />
                <Route path="/quiz/video" element={<VideoQuizComponent />} />
                <Route path="/quiz/game" element={<GameQuizComponent />} />
                <Route path="/quiz/hands-on" element={<HandsOnQuizComponent />} />
                <Route path="/quiz/audio" element={<AudioQuizComponent />} />
                <Route path="/quiz/text" element={<TextQuizComponent />} />
                <Route path="/video-learner" element={<VideoLearner />} />
              </Routes>
            </AuthProvider>
        </Router>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
    </Fragment>
  )
}

export default App
