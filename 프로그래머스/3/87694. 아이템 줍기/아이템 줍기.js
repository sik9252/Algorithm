function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0;
    
    const board = Array.from({length: 102}, () => Array(102).fill(-1));
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    const doubleRect = rectangle.map(([x1, y1, x2, y2]) => [x1*2, y1*2, x2*2, y2*2]);
    
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    // 직사각형 만들기
    for (const r of doubleRect) {
        const [x1, y1, x2, y2] = r;
        for (let i = x1; i <= x2; i++) {
            for (let j = y1; j <= y2; j++) {
                // 직사각형 내부 0
                if (x1 < i && x2 > i && y1 < j && y2 > j) {
                    board[i][j] = 0;
                } else if (board[i][j] !== 0) {
                    // 다른 직사각형의 내부가 아니면서 테두리일때 1
                    board[i][j] = 1;
                }
            }
        }
    }
    
    const queue = [];
    const visited = Array.from({length: 102}, () => Array(102).fill(false));
    
    queue.push([characterX, characterY]);
    visited[characterX][characterY] = true;
    
    while (queue.length) {
        const [x, y] = queue.shift();
        
        // 아이템이 있는 장소라면 반환
        if (x === itemX && y === itemY) {
            answer = parseInt(board[x][y] / 2);
            break;
        }
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (board[nx][ny] === 1 && !visited[nx][ny]) {
                queue.push([nx, ny]);
                board[nx][ny] = board[x][y] + 1;
                visited[nx][ny] = true;
            }
        }
    }
    
    return answer;
}