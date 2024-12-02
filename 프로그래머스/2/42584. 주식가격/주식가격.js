function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    
    for (let i = 0; i < prices.length-1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] > prices[j]) {
                answer[i] = j - i;
                break;
            }
            answer[i] = prices.length - 1 - i;
        }
    }
    
    return answer;
}