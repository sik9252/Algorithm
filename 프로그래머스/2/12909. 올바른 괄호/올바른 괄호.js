function solution(s){
    var answer = true;
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 || s[i] === "(") {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }
    
    answer = stack.length === 0 ? true : false;

    return answer;
}