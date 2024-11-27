const grades = [56, 78, 99, 85];
// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    accumulator += currentValue;
    // If it's the last element, divide by the total number of elements to calculate the average
    if (index === array.length - 1) {
        return accumulator / array.length;
    }
    return accumulator; // Otherwise, just return the running total
}
// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage, 0);

console.log(gradeAverage);