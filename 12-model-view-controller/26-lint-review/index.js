const numbers = [2, 4, 6, 8];
let squaredNums; // eslint-disable-line no-unused-vars

if (numbers.length > 0) {
  squaredNums = numbers.map((num) => {
    return num ** 2;
  });
}

console.log(squaredNums);
