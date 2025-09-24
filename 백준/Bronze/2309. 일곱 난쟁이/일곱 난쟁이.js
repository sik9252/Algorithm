const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

function solution(input) {
  input = input.map((d) => parseInt(d));

  const totalSum = input.reduce((acc, cur) => acc + cur, 0);
  let fakeDwarf1 = 0;
  let fakeDwarf2 = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (totalSum - input[i] - input[j] === 100) {
        fakeDwarf1 = input[i];
        fakeDwarf2 = input[j];

        break;
      }
    }

    if (fakeDwarf1 > 0) break;
  }

  const result = input.filter((d) => d !== fakeDwarf1 && d !== fakeDwarf2);

  return result.sort((a, b) => a - b).join("\n");
}

console.log(solution(input));