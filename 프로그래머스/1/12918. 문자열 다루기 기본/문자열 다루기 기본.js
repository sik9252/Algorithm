function solution(s) {
    const sArr = s.split("");
    
    if (s.length === 4 || s.length === 6) {
        for (let i=0; i<sArr.length; i++) {
            if (isNaN(sArr[i])) {
                return false;
            } 
        }
    } else {
        return false;
    }
    
    return true;
}