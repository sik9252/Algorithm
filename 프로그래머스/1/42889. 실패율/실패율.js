function solution(N, stages) {
    var answer = [];
    let failureRate = {};
    
    for (let i=1; i<=N; i++) {
        let chall = 0;
        let notClear = 0;
        for (const stage of stages) {
            if (stage >= i) {
                chall += 1;
            }
            if (stage === i) {
                notClear += 1;
            }
        }
        
        failureRate[i] = notClear/chall;
    }
    
    let sortedFailureRate = Object.entries(failureRate).sort((a, b) => b[1] - a[1]);
    
    for (const failureRate of sortedFailureRate) {
        answer.push(Number(failureRate[0]));
    }
    
    return answer;
}