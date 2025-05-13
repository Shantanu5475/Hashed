import React, { useState } from 'react';
import { generateTimeSlots } from './utils/generateTimeSlots';
import SlotList from './components/SlotList';
import DatePicker from './components/DatePicker';
import AdminInput from './components/AdminInput';

function App() {
  const workingHours = { start: "09:00", end: "17:00" };
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [confirmation, setConfirmation] = useState("");

  const slots = generateTimeSlots(workingHours.start, workingHours.end);

  const handleBookSlot = (time) => {
    if (bookedSlots.includes(time)) return;
    setBookedSlots([...bookedSlots, time]);
    setConfirmation(`Appointment booked for ${time}`);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setBookedSlots([]);
    setConfirmation("");
  };

  const handleAdminBook = (e) => {
    e.preventDefault();
    const time = e.target.slotTime.value;
    if (time && !bookedSlots.includes(time)) {
      setBookedSlots([...bookedSlots, time]);
    }
    e.target.reset();
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Appointment Slot Booker</h2>
      <p><strong>Working Hours:</strong> {workingHours.start} - {workingHours.end}</p>

      <DatePicker selectedDate={selectedDate} onChange={handleDateChange} />

      <h3>Available Slots</h3>
      <SlotList slots={slots} bookedSlots={bookedSlots} onBook={handleBookSlot} />

      {confirmation && <p style={{ marginTop: '1rem', color: 'green' }}>{confirmation}</p>}

      <hr />

      <h3>Admin Panel</h3>
      <AdminInput onAdminBook={handleAdminBook} />
    </div>
  );
}

export default App;
