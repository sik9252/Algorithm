function solution(clothes) {
    let answer = 1;
    let wardrobe = new Map();
    
    for (const clothe of clothes) {
        const key = clothe[1];
        const count = wardrobe.has(key) ? wardrobe.get(key) : 0;
        wardrobe.set(key, count + 1);
    }
    
    for (const [key, value] of wardrobe) {
        console.log(value)
        answer *= (value + 1);
    }   
    
    return answer - 1;
}