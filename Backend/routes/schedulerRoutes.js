import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add an event
router.post("/events", async (req, res) => {

  try {
    const { title, start, end } = req.body;
    const event = new Event({ title, start: new Date(start), end: new Date(end) });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: "Error adding event", error: err.message });
  }
});

export default router;
