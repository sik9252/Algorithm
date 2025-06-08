function solution(s){
    let stack = []
    
    s = s.split("");
    
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 && s[i] === ")") {
            return false;
        }
        
        if (s[i] === "(") {
            stack.push("(");
        } else if (s[i] === ")") {
            stack.pop();
        }
    }

    return stack.length > 0 ? false : true;
}