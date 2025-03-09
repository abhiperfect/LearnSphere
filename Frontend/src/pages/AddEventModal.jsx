// import React, { useState } from "react";
// import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";
// import axios from "axios";

// const AddEventModal = ({ open, handleClose, fetchEvents }) => {
//   const [title, setTitle] = useState("");
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");

//   const handleAddEvent = async () => {
//     try {
//       await axios.post("http://localhost:5000/scheduler", { title, start, end });
//       fetchEvents();
//       handleClose();
//     } catch (error) {
//       console.error("Error adding event:", error);
//     }
//   };

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Add New Event</DialogTitle>
//       <DialogContent>
//         <TextField fullWidth label="Event Name" value={title} onChange={(e) => setTitle(e.target.value)} sx={{ mt: 2 }} />
//         <TextField fullWidth type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} sx={{ mt: 2 }} />
//         <TextField fullWidth type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} sx={{ mt: 2 }} />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose} color="secondary">Cancel</Button>
//         <Button onClick={handleAddEvent} variant="contained" color="primary">Add Event</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AddEventModal;
