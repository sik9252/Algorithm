const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

function solution(input) {
  const [n, c] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  const record = new Map();

  arr.forEach((num, index) => {
    if (!record.has(num)) {
      record.set(num, { count: 1, index: index });
    } else {
      record.get(num).count++;
    }
  });

  const nums = [...record.keys()];

  nums.sort((a, b) => {
    const A = record.get(a);
    const B = record.get(b);

    // 빈도가 같지 않은 경우 빈도가 높은것부터
    if (A.count !== B.count) {
      return B.count - A.count;
    }

    // 빈도가 같은 경우 먼저 나온것부터
    return A.index - B.index;
  });

  const result = nums.flatMap((num) => {
    const count = record.get(num).count;
    return Array(count).fill(num);
  });

  console.log([...result].join(" "));
}

solution(input);