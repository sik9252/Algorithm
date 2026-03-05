function solution(progresses, speeds) {
    var answer = [];
    const leftDays = [];
    
    for (let i = 0; i < progresses.length; i++) {
        const leftProgress = 100 - progresses[i];
        const needDay = Math.ceil(leftProgress / speeds[i]);
        
        leftDays.push(needDay);
    }
    
    let current = leftDays[0];
    let count = 1;
    
    for (let i = 1; i < leftDays.length; i++) {
        if (leftDays[i] <= current) {
            count++;
        } else {
            answer.push(count);
            current = leftDays[i];
            count = 1;
        }
    }
    
    answer.push(count);
    
    return answer;
}