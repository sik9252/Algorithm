function solution(targets) {
    let answer = 1;
    
    targets = targets.sort((a, b) => {        
        return b[0] - a[0];
    })
    
    let checkpoint = targets[0][0];
    
    for (let i = 1; i < targets.length; i++) {
        const [start, end] = targets[i];
        
        if (end <= checkpoint) {
            checkpoint = start;
            answer += 1;
        }
    }
    
    return answer;
}