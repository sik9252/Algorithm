function solution(sizes) {
    let width = [];
    let height = [];
    
    sizes.forEach(([a, b]) => {
        if (a >= b) {
            width.push(a);
            height.push(b);
        } else {
            width.push(b);
            height.push(a);
        }
    })
    
    return Math.max(...width) * Math.max(...height);
}