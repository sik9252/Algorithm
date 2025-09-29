const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

let n, arr, result;

function dfs(y, x, size) {
  if (size === 1) {
    return arr[y][x];
  }

  const current = arr[y][x];
  result = "";

  for (let i = y; i < size + y; i++) {
    for (let j = x; j < size + x; j++) {
      if (current !== arr[i][j]) {
        result += "(";
        result += dfs(y, x, size / 2);
        result += dfs(y, x + size / 2, size / 2);
        result += dfs(y + size / 2, x, size / 2);
        result += dfs(y + size / 2, x + size / 2, size / 2);
        result += ")";
        return result;
      }
    }
  }

  return arr[y][x];
}

function solution(input) {
  n = Number(input[0]);
  arr = input.slice(1).map((line) => line.split("").map(Number));

  result = dfs(0, 0, n);

  console.log(result);
}

solution(input);