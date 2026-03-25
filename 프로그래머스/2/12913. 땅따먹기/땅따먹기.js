function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const dp = Array.from({length: n}, () => Array(m).fill(0));
    
    for (let i = 0; i < m; i++) {
        dp[0][i] = land[0][i];
    }
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let maxV = 0;
            for (let k = 0; k < 4; k++) {
                if (k === j) continue;
                maxV = Math.max(maxV, dp[i-1][k]);
            } 
            
            dp[i][j] = land[i][j] + maxV;
        }
    }

    return Math.max(...dp[n-1]);
}