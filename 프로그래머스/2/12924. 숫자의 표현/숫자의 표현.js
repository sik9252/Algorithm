function solution(n) {
    var answer = 0;
    
    let left = 1;
    let right = 1
    let sum = 1;
    
    while (left <= n) {
        if (sum < n) {
            right++;
            sum += right;
        } else if (sum > n) {
            sum -= left;
            left++;
        } else {
            answer++;
            sum -= left;
            left++;
        }
    }
    
    return answer;
}