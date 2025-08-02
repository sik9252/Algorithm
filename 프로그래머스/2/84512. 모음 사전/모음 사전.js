function permutationWithRepeat(arr, r) {
    const result = [];
    
    function dfs(path) {
        if(path.length === r) {
            result.push([...path].join(""));
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

function solution(word) {
    const allCases = [];
    var answer = 0;
    
    for (let i=1; i <= 5; i++) {
        const cases = permutationWithRepeat(['A', 'E', 'I', 'O', 'U'], i);
        allCases.push(...cases);
    }
    
    allCases.sort();
    answer = allCases.indexOf(word) + 1;
    
    return answer;
}