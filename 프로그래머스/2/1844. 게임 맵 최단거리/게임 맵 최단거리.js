function solution(maps) {
    var answer = 0;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const n = maps.length;
    const m = maps[0].length;
    
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    const queue = [];
    
    queue.push([0, 0]);
    visited[0][0] = true;
    
    while (queue.length) {
        const [y, x] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (ny >= 0 && ny < n && nx >= 0 && nx < m && maps[ny][nx] === 1 && !visited[ny][nx]) {
                visited[ny][nx] = true;
                maps[ny][nx] = maps[y][x] + 1;
                queue.push([ny, nx]);
            }
        }
    }
    
    if (maps[n-1][m-1] === 1) {
        answer = -1;
    } else {
        answer = maps[n-1][m-1];
    }

    return answer;
}