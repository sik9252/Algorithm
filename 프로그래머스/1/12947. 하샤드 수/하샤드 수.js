function solution(x) {
    var answer = true;
    const arr = x.toString().split("").map(a => Number(a));
    const sum = arr.reduce((a, b) => a + b, 0)
    
    if (x % sum !== 0) {
        answer = false;
    }
    
    return answer;
}