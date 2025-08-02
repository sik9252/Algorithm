function isOneLetterDiff(curWord, nextWord) {
    let diff = 0;
    
    for (let i = 0; i < curWord.length; i++) {
        if (curWord[i] !== nextWord[i]) {
            diff++;
            
            if (diff > 1) return false;
        }
    }
    
    return diff === 1;
}

function solution(begin, target, words) {
    var answer = 0;
    
    const visited = Array(words.length).fill(false);
    const queue = [];
    
    queue.push([begin, 0]);
    
    while (queue.length) {
        const [curWord, count] = queue.shift();
        
        if (curWord === target) {
            return count;
        }
        
        for (let i = 0; i < words.length; i++) {
            if (!visited[i] && isOneLetterDiff(curWord, words[i])) {
                visited[i] = true;
                queue.push([words[i], count + 1]);
            }
        }
    }
    
    return 0;
}