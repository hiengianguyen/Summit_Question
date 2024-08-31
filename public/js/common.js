const getFormattedCurrentDateTime = () => {
  // current date and time
  const now = new Date();

  // Extract hours, minutes, day, month, and year from the Date object
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  // Format datetime
  return `${hours}:${minutes} ${day}/${month}/${year}`;
};

export { getFormattedCurrentDateTime };
