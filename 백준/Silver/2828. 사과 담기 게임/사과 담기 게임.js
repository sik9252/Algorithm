const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const j = Number(input[1]);
  const pos = [];
  let result = 0;

  for (let i = 2; i < 2 + j; i++) {
    pos.push(Number(input[i]));
  }

  let left = 1;
  for (let i = 0; i < pos.length; i++) {
    let right = left + m - 1;
    let currentPos = pos[i];

    // 사과 위치가 바구니 길이 안인 경우
    if (currentPos >= left && currentPos <= right) {
      continue;
    } else {
      // 사과 위치가 바구니 왼쪽 끝보다 작은 경우
      if (currentPos < left) {
        result += left - currentPos;
        left = currentPos;
      }
      // 사과 위치가 바구니 오른쪽 끝보다 큰 경우
      if (currentPos > right) {
        result += currentPos - right;
        left += currentPos - right;
      }
    }
  }

  console.log(result);
}

solution(input);