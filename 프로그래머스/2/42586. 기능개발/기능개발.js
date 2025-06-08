function solution(progresses, speeds) {
    let leftDays = [];
    let answer = [];
    
    for (let i = 0; i < progresses.length; i++) {
        let leftProgress = 100 - progresses[i];
        let leftDay = Math.ceil(leftProgress / speeds[i]);
        
        leftDays.push(leftDay);
    }
    
    let currentMax = leftDays[0];
    let count = 1;

    for (let i = 1; i < leftDays.length; i++) {
      if (leftDays[i] <= currentMax) {
        count++;
      } else {
        answer.push(count);
        currentMax = leftDays[i];
        count = 1;
      }
    }
    
    answer.push(count);
    
    return answer;
}