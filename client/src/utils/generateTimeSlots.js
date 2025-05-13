// Generates 30-minute time slots between working hours
export const generateTimeSlots = (start = "09:00", end = "17:00") => {
  const slots = [];
  let [hour, minute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  while (hour < endHour || (hour === endHour && minute < endMinute)) {
    const startTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    minute += 30;
    if (minute >= 60) {
      hour += 1;
      minute = 0;
    }
    const endTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    slots.push({ start: startTime, end: endTime });
  }

  return slots;
};
