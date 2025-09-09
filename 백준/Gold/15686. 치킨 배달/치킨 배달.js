const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function combine(arr, r) {
  let result = [];

  function dfs(start, path) {
    if (path.length === r) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      dfs(i + 1, path);
      path.pop();
    }
  }

  dfs(0, []);

  return result;
}

function calcDistance(pos1, pos2) {
  return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}

function solution(input) {
  const HOME = 1, CHICKEN = 2;
  const [n, m] = input[0].split(" ").map(Number);
  const area = input.slice(1).map((line) => line.split(" ").map(Number));

  let result = Infinity;
  const home = [];
  const chicken = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (area[i][j] == HOME) {
        home.push([i, j]);
      } else if (area[i][j] == CHICKEN) {
        chicken.push([i, j]);
      }
    }
  }

  const combinedChickens = combine(chicken, m);

  for (const combination of combinedChickens) {
    let cityMinDistance = 0;

    for (const homePos of home) {
      let eachMinDistance = Infinity;

      for (const chickenPos of combination) {
        const dist = calcDistance(homePos, chickenPos);
        eachMinDistance = Math.min(eachMinDistance, dist);
      }

      cityMinDistance += eachMinDistance;
    }

    result = Math.min(cityMinDistance, result);
  }

  return result;
}

console.log(solution(input));