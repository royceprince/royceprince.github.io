function generateMCQFromFlashcards(text) {
  const lines = text.split("\n").filter(l => l.trim() !== "");
  let questions = [];

  lines.forEach((line) => {

    if (line.includes("80C")) {
      questions.push({
        question: "What is maximum deduction under section 80C?",
        options: ["₹1,50,000", "₹2,00,000", "₹50,000", "₹75,000"],
        correct: 0,
        explanation: line
      });
    }

    else if (line.toLowerCase().includes("ltcg")) {
      questions.push({
        question: "What is holding period for LTCG in listed shares?",
        options: ["12 months", "24 months", "36 months", "6 months"],
        correct: 0,
        explanation: line
      });
    }

    else if (line.includes("80D")) {
      questions.push({
        question: "What is deduction under section 80D for senior citizen?",
        options: ["₹50,000", "₹25,000", "₹75,000", "₹1,00,000"],
        correct: 0,
        explanation: line
      });
    }

    else if (line.toLowerCase().includes("gift")) {
      questions.push({
        question: "Gift received above ₹50,000 is treated as?",
        options: ["Fully taxable", "Partially taxable", "Exempt", "Not taxable"],
        correct: 0,
        explanation: line
      });
    }

  });

  return questions;
}
