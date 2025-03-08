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
