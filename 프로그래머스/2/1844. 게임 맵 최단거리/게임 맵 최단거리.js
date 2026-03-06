function solution(maps) {
    var answer = 0;
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    const n = maps.length;
    const m = maps[0].length;
    const dist = Array.from({length: n}, () => Array(m).fill(0));
    dist[0][0] = 1;
    
    const queue = [[0, 0]];
    let head = 0;
    
    while (head < queue.length) {
        const [x, y] = queue[head++];
        
        if (x === n-1 && y === m-1) {
            return dist[x][y];
        }
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (maps[nx][ny] !== 1 || dist[nx][ny] !== 0) continue;
            
            dist[nx][ny] = dist[x][y] + 1;
            queue.push([nx, ny]);
            
        }
    }
    
    return -1;
}