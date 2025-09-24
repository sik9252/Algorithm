const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

let arr = Array(26).fill(0);
function solution(input) {
  input = input[0].split("");

  for (let i = 0; i < input.length; i++) {
    arr[input[i].charCodeAt() - 97]++;
  }

  return [...arr].join(" ");
}

console.log(solution(input));