function solution(priorities, location) {
    var answer = 0;

    const queue = priorities.map((p, i) => ({p, i}));
    const sorted = [...priorities].sort((a, b) => b - a);
    let sp = 0;
    
    while (queue.length) {
        const current = queue.shift();
        
        if (current.p < sorted[sp]) {
            queue.push(current);
            continue;
        }
        
        answer++;
        sp++;
        
        if (current.i === location) {
            return answer;
        }
    }
}