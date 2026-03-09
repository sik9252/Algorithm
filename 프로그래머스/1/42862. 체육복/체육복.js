function solution(n, lost, reserve) {    
    const lostSet = new Set(lost);
    const reserveSet = new Set(reserve);
    
    for (const r of reserve) {
        if (lostSet.has(r)) {
            lostSet.delete(r);
            reserveSet.delete(r);
        }
    }
    
    const sortedReserve = [...reserveSet].sort((a, b) => a - b);
    
    for (const r of sortedReserve) {
        if (lostSet.has(r-1)) {
            lostSet.delete(r-1);
        } else if (lostSet.has(r+1)) {
            lostSet.delete(r+1);
        }
    }
    
    return n - lostSet.size;
}