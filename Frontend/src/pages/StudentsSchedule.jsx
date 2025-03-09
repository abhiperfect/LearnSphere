import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import { Button, Modal, Box, TextField, Typography, List, ListItem, ListItemText } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const eventColors = ["#1976d2", "#ff9800", "#4caf50", "#e91e63", "#9c27b0"];

const StudentsrScheduler = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", start: null, end: null });
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    setCurrentYear(currentDate.getFullYear());
  }, [currentDate]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/scheduler");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleAddEvent = async () => {
    if (!newEvent.title || !newEvent.start || !newEvent.end) {
      alert("Please fill all fields!");
      return;
    }

    const eventToAdd = {
      title: newEvent.title,
      start: newEvent.start.toISOString(),
      end: newEvent.end.toISOString(),
    };

    try {
      await axios.post("http://localhost:5000/scheduler/events", eventToAdd);
      setOpen(false);
      setNewEvent({ title: "", start: null, end: null });
      fetchEvents();
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const upcomingEvents = events.filter(event => new Date(event.start) >= new Date());

  const handleToday = () => setCurrentDate(new Date());
  const handleBack = () => {
    setCurrentDate(prev => {
      const prevMonth = new Date(prev);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      return prevMonth;
    });
  };
  const handleNext = () => {
    setCurrentDate(prev => {
      const nextMonth = new Date(prev);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      return nextMonth;
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div style={{ display: "flex", height: "100vh", width: "100vw", padding: "20px", gap: "30px" }}>
        
        {/* Calendar Section */}
        <div style={{ flex: 3, padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
          <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: "bold" }}>
            Trainers Schedule
          </Typography>

          {/* Year Display */}
          <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: "bold", color: "#1976d2" }}>
            {currentYear}
          </Typography>

          {/* Navigation Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "10px" }}>
            <Button variant="contained" onClick={handleBack}>Back</Button>
            <Button variant="contained" onClick={handleToday}>Today</Button>
            <Button variant="contained" onClick={handleNext}>Next</Button>
          </div>

          <Calendar
            localizer={localizer}
            events={events.map((event, index) => ({
              ...event,
              start: new Date(event.start),
              end: new Date(event.end),
              color: eventColors[index % eventColors.length],
            }))}
            startAccessor="start"
            endAccessor="end"
            date={currentDate}
            toolbar={false}
            selectable
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: event.color,
                color: "#fff",
                borderRadius: "5px",
                padding: "5px",
                fontWeight: "bold",
                fontSize: "12px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            })}
            min={new Date(new Date().getFullYear() - 1, 0, 1)}
            max={new Date(new Date().getFullYear() + 1, 11, 31)}
            style={{ height: "calc(100vh - 200px)", width: "100%" }}
          />
        </div>

        {/* Upcoming Events Section */}
        <div style={{ flex: 1, padding: "20px", background: "#f9f9f9", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", overflowY: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>Upcoming Events</Typography>
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Add Event</Button>
          </div>

          <List sx={{ mt: 2 }}>
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => (
                <ListItem key={index} sx={{ background: "#fff", mb: 1, borderRadius: "5px", boxShadow: 1 }}>
                  <ListItemText 
                    primary={event.title} 
                    secondary={`${moment(event.start).format("MMM Do")} - ${moment(event.end).format("MMM Do, YYYY")}`} 
                    sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                  />
                </ListItem>
              ))
            ) : (
              <Typography align="center">No upcoming events</Typography>
            )}
          </List>
        </div>

        {/* Add Event Modal */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 300, bgcolor: "white", p: 3, borderRadius: 2, boxShadow: 24 }}>
            <Typography variant="h6">Add New Event</Typography>
            <TextField fullWidth label="Event Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} margin="normal" />
            
            <DatePicker label="Start Date" value={newEvent.start} onChange={(date) => setNewEvent({ ...newEvent, start: date })} renderInput={(params) => <TextField fullWidth {...params} margin="normal" />} />
            
            <DatePicker label="End Date" value={newEvent.end} onChange={(date) => setNewEvent({ ...newEvent, end: date })} renderInput={(params) => <TextField fullWidth {...params} margin="normal" />} />

            <Button variant="contained" color="primary" onClick={handleAddEvent} sx={{ mt: 2 }}>Save Event</Button>
          </Box>
        </Modal>
      </div>
    </LocalizationProvider>
  );
};

export default SchedulerCalendar;
