import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import {
  FaVideo,
  FaQuestionCircle,
  FaTasks,
  FaCalendarAlt,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";
import StickyHeader from "../shared/StickyHeader";

const sections = [
  {
    icon: <FaVideo />,
    title: "Learn Something of Your Interest",
    description: "Watch videos, gain knowledge, and track your progress.",
  },
  {
    icon: <FaTasks />,
    title: "Your Learning Journey",
    description:
      "Stay on track with pre-read materials and post-session tasks.",
  },
  {
    icon: <FaVideo />,
    title: "Join Live Workshops",
    description: "Interact with experts and peers in real-time sessions.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Plan with Ease",
    description:
      "Keep track of all learning events with an intuitive calendar.",
  },
  {
    icon: <FaUsers />,
    title: "Mentorship & Community",
    description:
      "Connect, discuss, and grow with mentors and like-minded peers.",
  },
  {
    icon: <FaCertificate />,
    title: "Earn & Show Off Badges",
    description:
      "Get recognized for your achievements with certificates and badges.",
  },
];

export default function VideoLearner() {
  return (
    <div>
      <StickyHeader title="📹 Video Learner" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "100px 200px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {sections.map((section, index) => (
          <Card
            key={index}
            style={{
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              borderRadius: "15px",
              transition: "0.3s",
              cursor: "pointer",
              backgroundColor: "#ffffff",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <CardContent>
              <div
                style={{
                  fontSize: "45px",
                  color: "#1565c0",
                  marginBottom: "15px",
                }}
              >
                {section.icon}
              </div>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {section.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ borderRadius: "8px" }}
              >
                Explore
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
