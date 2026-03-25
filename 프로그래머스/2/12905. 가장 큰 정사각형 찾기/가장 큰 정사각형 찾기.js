function solution(board) {
    const n = board.length;
    const m = board[0].length;
    const dp = Array.from({length: n}, () => Array(m).fill(0));
    let maxLen = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 0) continue;
            
            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            } else {
               dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1], dp[i][j-1]) + 1; 
            }
            
            if (dp[i][j] > maxLen) maxLen = dp[i][j];
        }
    }
    
    return maxLen * maxLen;
}