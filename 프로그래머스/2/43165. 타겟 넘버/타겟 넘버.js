function permutationWithRepetition(arr, r) {
    const result = [];
    
    function dfs(path) {
        if (path.length === r) {
            result.push([...path]);
            return;
        }
        
        for (const item of arr) {
            path.push(item);
            dfs(path);
            path.pop();
        }
    }
    
    dfs([]);
    return result;
}

function solution(numbers, target) {
    var answer = 0;
    const cases = permutationWithRepetition(["+", "-"], numbers.length);
    
    for (let i=0; i < cases.length; i++) {
        let sum = 0;
        
        for (let j=0; j < numbers.length; j++) {
            sum += Number(cases[i][j] + numbers[j])
        }
        
        if (sum === target) {
            answer++;
        }
    }
    
    return answer;
}