function solution(s) {
    let answer = 0;
    let splitS = s.split("");
    
    for (let i=0; i<splitS.length; i++) {
        let stack = [];
        splitS.push(splitS.shift());
        
        for (let j=0; j<splitS.length; j++) {
            if (splitS[j] === "]") {
                if (stack[stack.length-1] === "[") {
                    stack.pop();
                    continue;
                }
            }
             if (splitS[j] === "}") {
                if (stack[stack.length-1] === "{") {
                    stack.pop();
                    continue;
                }                 
            }
             if (splitS[j] === ")") {
                if (stack[stack.length-1] === "(") {
                    stack.pop();
                      continue;
                }                
            }
            
            stack.push(splitS[j]);
        }
        
        if (stack.length === 0) {
            answer += 1
        }
    }
    
    return answer;
}