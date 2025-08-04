function solution(arr) {
    var answer = [0, 0];
    const N = arr.length;
    
    function compress(x, y, size) {
        const start = arr[x][y];
        let uniform = true;
        
        // 영역이 전부 start 값으로 같은지 검사
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== start) {
                    uniform = false;
                    break;
                }
            }
            
            if (!uniform) break;
        }
        
        if (uniform) {
            answer[start] += 1;
        } else {
            const half = size / 2;
            compress(x, y, half); // 왼쪽 상단
            compress(x, y + half, half); // 오른쪽 상단
            compress(x + half, y, half); // 왼쪽 하단
            compress(x + half, y + half, half); // 오른쪽 하단
        }
    }
    
    compress(0, 0, N);
    
    return answer;
}