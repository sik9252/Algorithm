function solution(tickets) {
    var answer = [];
    const visited = Array(tickets.length).fill(false);
    
    function dfs(routes) {
        if (routes.length === tickets.length + 1) answer.push(routes);
        
        for (const i in tickets) {
            const [start, end] = tickets[i];
            
            if (!visited[i] && routes[routes.length - 1] === start) {
                visited[i] = true;
                dfs([...routes, end]);
                visited[i] = false;
            }
        }
    }
    
    dfs(["ICN"]);
    
    return answer.sort()[0];
}