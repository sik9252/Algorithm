function solution(numbers) {
    const allNums = Array.from({length: 10}, (_, i) => i);
    const notFoundNums = allNums.filter((num) => !numbers.includes(num));
    
    return notFoundNums.reduce((acc, v) => acc + v, 0);
}