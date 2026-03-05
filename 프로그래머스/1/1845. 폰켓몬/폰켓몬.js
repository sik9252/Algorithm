function solution(nums) {
    var answer = 0;
    const a = new Set(nums);
    const b = nums.length / 2;

    if (a.size > b) {
        answer = b;
    } else {
        answer = a.size;
    }
    
    return answer;
}