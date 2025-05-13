import React from 'react';

const AdminInput = ({ onAdminBook }) => {
  return (
    <form onSubmit={onAdminBook} style={{ marginTop: '1rem' }}>
      <label>
        Mark slot as booked (HH:MM):
        <input type="time" name="slotTime" required style={{ margin: '0 1rem' }} />
      </label>
      <button type="submit">Book Slot</button>
    </form>
  );
};

export default AdminInput;
