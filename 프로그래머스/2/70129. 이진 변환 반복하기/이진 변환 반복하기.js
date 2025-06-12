function solution(s) {
    let convertedCount = 0;
    let zeroCount = 0;

    while (s !== "1") {
      const filtered = s.replace(/0/g, "");
        
      zeroCount += s.length - filtered.length;
      s = filtered.length.toString(2);
      convertedCount++;
    }

    return [convertedCount, zeroCount];
}