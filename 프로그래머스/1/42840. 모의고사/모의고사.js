function solution(answers) {
    var answer = [];
    let maxAnswer = 0;
    
    const a = [1, 2, 3, 4, 5];
    const b = [2, 1, 2, 3, 2, 4, 2, 5];
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let ac = 0;
    let bc = 0;
    let cc = 0;
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === a[i % 5]) ac++;
        if (answers[i] === b[i % 8]) bc++;
        if (answers[i] === c[i % 10]) cc++;
    }
    
    maxAnswer = Math.max(ac, bc, cc);
    
    if (ac === maxAnswer) {
        answer.push(1);
    }
    
    if (bc === maxAnswer) {
        answer.push(2);
    }
    
    if (cc === maxAnswer) {
        answer.push(3);
    }
    
    return answer;
}