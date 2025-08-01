function solution(n, wires) {
    var answer = Infinity;
    const graph = Array.from({length: n+1}, ()=>[]);
    wires.forEach(([u,v]) => {
        graph[u].push(v);
        graph[v].push(u);
    })
    
    const visited = Array(n+1).fill(false);
    const subSize = Array(n+1).fill(0);
    
    function dfs(u) {
        visited[u] = true;
        subSize[u] = 1
        for (const v of graph[u]) {
            if (!visited[v]) {
                dfs(v);
                subSize[u] += subSize[v];
            }
        }
    }
    
    dfs(1);
    
    for (let u = 2; u <= n; u++) {
        const p1 = subSize[u];
        const p2 = n - subSize[u];
        answer = Math.min(answer, Math.abs(p1 - p2));
    }
    
    return answer;
}