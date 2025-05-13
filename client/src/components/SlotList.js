import React from 'react';

const SlotList = ({ slots, bookedSlots, onBook }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {slots.map(slot => {
        const time = slot.start;
        const isBooked = bookedSlots.includes(time);
        return (
          <button
            key={time}
            onClick={() => onBook(time)}
            disabled={isBooked}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: isBooked ? '#ccc' : '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isBooked ? 'not-allowed' : 'pointer'
            }}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
};

export default SlotList;
