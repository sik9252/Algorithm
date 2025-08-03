function solution(n) {
    var answer = 0;
    
    const arr = n.toString().split("");
    arr.sort((a, b) => b - a);
    
    return Number(arr.join(""));
}