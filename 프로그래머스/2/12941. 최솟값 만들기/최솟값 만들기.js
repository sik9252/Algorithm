function solution(A,B){
    let total = 0;
    
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    
    while (A.length > 0) {
        const first = A.shift();
        const second = B.shift();
        
        total += first * second;
    }
    
    return total;
}