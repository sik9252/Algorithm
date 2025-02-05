function solution(nums) {
    const answer = [...new Set(nums)];
    const possibleChoice = nums.length / 2;
    
    return answer.length > possibleChoice ? possibleChoice : answer.length;
}