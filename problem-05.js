function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }

    if (serialNumber > waitingTimes.length) {
        let finishedInterview = waitingTimes.length;

        let totalPeopleWithoutIsrat = serialNumber - 1;

        let remainingPeopleForInterview = totalPeopleWithoutIsrat - finishedInterview;

        let totalTime = 0;
        for (let i = 0; i < waitingTimes.length; i++) {
            totalTime += waitingTimes[i];
        }

        let averageTime = Math.round(totalTime / waitingTimes.length);

        let waitingTimeForIsrat = averageTime * remainingPeopleForInterview;
        return waitingTimeForIsrat;
    } else {
        return "Invalid Input";
    };
};

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
