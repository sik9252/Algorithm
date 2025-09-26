const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

let N, M, K, T, farm, visited, worm;

function dfs(y, x) {
  visited[y][x] = true;

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i];
    const nx = x + dx[i];

    if (nx < 0 || ny >= N || ny < 0 || nx >= M) continue;

    if (farm[ny][nx] === 1 && !visited[ny][nx]) {
      dfs(ny, nx);
    }
  }
}

function solution(input) {
  let lineIndex = 0;

  T = Number(input[lineIndex]);
  lineIndex++;

  // T만큼 반복
  for (let i = 0; i < T; i++) {
    [M, N, K] = input[lineIndex].split(" ").map(Number);
    lineIndex++;

    farm = Array.from({ length: N }, () => Array(M).fill(0));
    visited = Array.from({ length: N }, () => Array(M).fill(false));
    worm = 0;

    // 배추밭 구성
    for (let j = 0; j < K; j++) {
      const [X, Y] = input[lineIndex].split(" ").map(Number);
      lineIndex++;
      farm[Y][X] = 1;
    }

    // 배추밭 탐색
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (farm[i][j] === 1 && !visited[i][j]) {
          dfs(i, j);
          worm++;
        }
      }
    }

    console.log(worm);
  }
}

solution(input);