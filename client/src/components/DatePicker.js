import React from 'react';

const DatePicker = ({ selectedDate, onChange }) => {
  return (
    <label>
      Select Date:
      <input
        type="date"
        value={selectedDate}
        onChange={onChange}
        style={{ marginLeft: '1rem' }}
      />
    </label>
  );
};

export default DatePicker;
