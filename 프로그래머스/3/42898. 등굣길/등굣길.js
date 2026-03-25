function solution(m, n, puddles) {
    const puddleCheck = Array.from({length: n+1}, () => Array(m+1).fill(false));
    for (const [x, y] of puddles) {
        puddleCheck[y][x] = true;
    }
    
    const dp = Array(m+1).fill(0);
    dp[1] = 1;
    
    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= m; x++) {
            if (puddleCheck[y][x]) {
                dp[x] = 0;
                continue;
            }
                
            dp[x] = (dp[x-1] + dp[x]) % 1000000007;
        }
    }

    return dp[m];
}