function solution(cards1, cards2, goal) {
    let answer = '';
    let count = 0;
    
    for (let i = 0; i < goal.length; i++) {
        if (goal[i] === cards1[0]) {
            cards1.shift();
            count ++;
        } else if (goal[i] === cards2[0]) {
            cards2.shift();
            count ++;
        } else {
            break;
        }
    }
    
    if (count === goal.length) {
        answer = 'Yes';
    } else {
        answer = 'No';
    };
    
    return answer;
}