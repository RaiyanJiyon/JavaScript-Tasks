function calculateFinalScore(obj) {
  let totalScore = 0;

  if (
    typeof obj !== "object" ||
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  if (obj.isFFamily === true) {
    totalScore += 20;
  }

  if (obj.testScore <= 50) {
    totalScore += obj.testScore;
  }

  if (obj.schoolGrade <= 30) {
    totalScore += obj.schoolGrade;
  }

  if (totalScore >= 80) {
    return true;
  } else {
    return false;
  }
}

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
  })
);

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
  })
);

console.log(calculateFinalScore("hello"));

console.log(
  calculateFinalScore({
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
  })
);
