function solution(array, commands) {
    var answer = [];
    
    for (const cmd of commands) {
        const [i, j, k] = cmd;
        const slicedArray = array.slice(i-1, j);
        const sortedSlicedArray = slicedArray.sort((a,b) => a-b);
        answer.push(slicedArray[k-1])
    }
    
    return answer;
}