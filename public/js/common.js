const boyAvatars = [
  "https://firebasestorage.googleapis.com/v0/b/submit-question.appspot.com/o/avatars%2Fboy-1.png?alt=media&token=fcadb816-8750-4431-8fa0-1768c144518a",
  "https://firebasestorage.googleapis.com/v0/b/submit-question.appspot.com/o/avatars%2Fboy-2.png?alt=media&token=6986f34c-1e54-493a-910f-ae8b42a71974",
  "https://firebasestorage.googleapis.com/v0/b/submit-question.appspot.com/o/avatars%2Fboy-3.png?alt=media&token=585e03ae-0538-463f-a034-7139be777f56",
  "https://firebasestorage.googleapis.com/v0/b/submit-question.appspot.com/o/avatars%2Fboy-4.png?alt=media&token=823efd1b-5b58-41b2-8990-5cff1342bef1",
  "https://firebasestorage.googleapis.com/v0/b/submit-question.appspot.com/o/avatars%2Fboy-5.png?alt=media&token=d28847ae-d624-4bc0-8275-32d5737eda68",
];

const girlAvatars = [
  "https://firebasestorage.googleapis.com/v0/b/submit-question.appspot.com/o/avatars%2Fgirl-1.png?alt=media&token=ea59757d-8b49-4e96-8df8-6ed86ce2d8e1",
  "https://firebasestorage.googleapis.com/v0/b/submit-question.appspot.com/o/avatars%2Fgirl-2.png?alt=media&token=ca06901b-38cd-40d6-aa42-33f19bd5b5d0",
  "https://firebasestorage.googleapis.com/v0/b/submit-question.appspot.com/o/avatars%2Fgirl-3.png?alt=media&token=dc2ef1f0-2e87-4919-8209-457b677fc546",
  "https://firebasestorage.googleapis.com/v0/b/submit-question.appspot.com/o/avatars%2Fgirl-4.png?alt=media&token=f18b0cff-1813-40d0-8aac-6b9dee1aaee7",
  "https://firebasestorage.googleapis.com/v0/b/submit-question.appspot.com/o/avatars%2Fgirl-5.png?alt=media&token=cf9957c9-7b45-4645-b716-a1e2da44dbbb",
];

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

export { getFormattedCurrentDateTime, boyAvatars, girlAvatars };
