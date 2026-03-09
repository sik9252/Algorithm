function solution(brown, yellow) {
    const areaSize = brown + yellow;
    
    for (let w = areaSize; w >= 1; w--) {
        if (areaSize % w !== 0) continue;
        
        const h = areaSize / w;
        if (w < h) continue;
        
        if ((w - 2) * (h - 2) === yellow) {
            return [w, h];
        }
    }
}