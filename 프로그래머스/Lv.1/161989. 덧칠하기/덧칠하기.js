function solution(n, m, section) {
    var answer = 0;
    
    let part = 0;
    
    section.forEach((n) => {
        if (n > part) {
            part = m + n - 1;
            answer++;
        }
    })
    
    return answer;
}
