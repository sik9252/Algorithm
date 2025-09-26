const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

let n, arr, visited, result;

function dfs(y, x, high) {
  visited[y][x] = true;

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= n || visited[ny][nx]) continue;

    if (arr[ny][nx] > high && !visited[ny][nx]) {
      dfs(ny, nx, high);
    }
  }
}

function solution(input) {
  n = input[0].split(" ").map(Number);
  arr = input.slice(1).map((line) => line.split(" ").map(Number));
  result = 1;

  for (let high = 1; high <= 100; high++) {
    visited = Array.from({ length: n }, () => Array(n).fill(false));
    let count = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j] > high && !visited[i][j]) {
          dfs(i, j, high);
          count++;
        }
      }
    }

    result = Math.max(result, count);
  }

  console.log(result);
}

solution(input);