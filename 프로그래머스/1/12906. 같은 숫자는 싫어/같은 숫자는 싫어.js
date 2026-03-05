function solution(arr)
{
    const stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0) {
            stack.push(arr[i]);
        } else {
            const top = stack[stack.length - 1];
            if (top === arr[i]) {
                continue;
            } else {
                stack.push(arr[i]);
            }
        }
    }
    
    return stack;
}