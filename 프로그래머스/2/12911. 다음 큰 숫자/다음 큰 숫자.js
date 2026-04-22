function solution(n) {
  const countOne = (num) => num.toString(2).split("1").length - 1;

  const target = countOne(n);
  let next = n + 1;

  while (countOne(next) !== target) {
    next++;
  }

  return next;
}