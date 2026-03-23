function solution(N, number) {
    if (N === number) return 1;
    
    const dp = Array.from({length: 9}, () => new Set());
    
    for (let i = 1; i <= 8; i++) {
        // 5, 55, 555와 같은 연속된 수는 무조건 하나씩 있어야 함
        dp[i].add(Number(String(N).repeat(i)));
        
        // j, (i-j)의 두 덩어리로 나뉘어진 조합 생성
        for (let j = 1; j < i; j++) {
            for (const a of dp[j]) {
                for (const b of dp[i-j]) {
                    dp[i].add(a+b);
                    dp[i].add(a-b);
                    dp[i].add(a*b);
                    if (b !== 0) dp[i].add(Math.trunc(a/b));
                }
            }
        }
        
        // dp[i] 조합에 number과 일치하는 값이 있으면 바로 반환
        if (dp[i].has(number)) return i;
    }
    
    return -1;
}