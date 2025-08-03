function solution(absolutes, signs) {
    let sum = 0;
    
    absolutes.forEach((num, i) => {
        signs[i] ? sum += num : sum -= num
    })
    
    return sum;
}