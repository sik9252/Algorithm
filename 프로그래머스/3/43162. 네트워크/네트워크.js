function solution(n, computers) {
    var answer = 0;
    const visited = Array(n).fill(false);
    
    function dfs(idx) {
        visited[idx] = true;
        
        for (let i=0; i < n; i++) {
            if (!visited[i] && computers[idx][i] === 1) {
                dfs(i);
            }
        }
    }
    
    for (let i=0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}