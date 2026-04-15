function generateMCQFromFlashcards(text) {
  const lines = text.split("\n").filter(l => l.trim() !== "");

  let questions = [];

  lines.forEach((line, index) => {
    // Example: extract numbers or keywords
    if (line.includes("₹") || line.match(/\d+/)) {

      let question = `What is the correct statement regarding: ${line}?`;

      let options = [
        line,
        "Incorrect statement",
        "Partially correct",
        "None of the above"
      ];

      questions.push({
        type: "concept",
        question: question,
        options: shuffle(options),
        correct: 0,
        explanation: line
      });
    }
  });

  return questions;
}

// Shuffle function
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
