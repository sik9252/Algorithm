const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

function solution(input) {
  [n, m] = input[0].split(" ").map(Number);
  arr = input.slice(1).map((line) => [...line].map(Number));

  const queue = [];
  const visited = Array(n)
    .fill(false)
    .map(() => Array(m).fill(false));

  queue.push([0, 0]);
  visited[0][0] = true;

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny] || arr[nx][ny] === 0) continue;

      visited[nx][ny] = true;
      queue.push([nx, ny]);
      arr[nx][ny] = arr[x][y] + 1;
    }
  }

  return arr[n - 1][m - 1];
}

console.log(solution(input));