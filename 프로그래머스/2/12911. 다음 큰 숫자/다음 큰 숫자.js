function solution(n) {
    var answer = 0;
    let standOneCount = countOne(n);
    
    for (let i = n + 1; i <= 1000000; i++) {
       if(standOneCount === countOne(i)) {
           answer = i;
           break;
       }
    }
    
    return answer;
}

function countOne(num) {
    return num.toString(2).split("").reduce((cnt, elem) => cnt + (elem === "1"), 0);
}