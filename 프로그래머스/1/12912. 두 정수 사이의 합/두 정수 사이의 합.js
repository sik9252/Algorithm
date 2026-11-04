function solution(a, b) {
    var answer = 0;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    
    while (min <= max) {
        answer += min;
        min++;
    }
    
    return answer;
}