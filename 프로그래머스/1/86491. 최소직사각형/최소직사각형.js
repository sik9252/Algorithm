function solution(sizes) {
    let maxLong = 0;
    let maxShort = 0;

    for (const [w, h] of sizes) {
        const long = Math.max(w, h);
        const short = Math.min(w, h);
        
        if (long > maxLong) {
            maxLong = long;
        }
        
        if (short > maxShort) {
            maxShort = short;
        }
    }

    return maxLong * maxShort;
}