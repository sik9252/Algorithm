function solution(elements) {
    const N = elements.length;
    const extended = elements.concat(elements);
    const sums = new Set();
    
    for (let len = 1; len < N; len++) {
        let windowSum = 0;
        
        // (1) 길이 1, 2, 3...일때 첫 윈도우 합 계산
        for (let j = 0; j < len; j++) {
            windowSum += extended[j];
        }

        sums.add(windowSum);
        
        // (2) 1에 이어 그 이후 윈도우 합 계산
        for (let start = 1; start < N; start++) {
            // extended[start + len - 1]: 새로 들어오는 값, extended[start - 1]: 빠져나가는 값
            windowSum += extended[start + len - 1] - extended[start - 1];
            sums.add(windowSum);
        }
    }
    
    // (3) 전체 합 계산
    const totalSum = elements.reduce((a, b) => a + b, 0);
    sums.add(totalSum);
    
    return sums.size;
}