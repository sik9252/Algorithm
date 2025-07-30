class PriorityQueue {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }
    
    parent(i) { return (i - 1) >> 1; };
    left(i) { return i * 2 + 1; };
    right(i) { return i * 2 + 2; };
    
    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    };
    
    _bubbleUp(i) {
        while (i > 0) {
            const parent = this.parent(i);
            if (this.compare(this.heap[parent], this.heap[i])) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }
    
    pop() {
        if (!this.heap.length) return;
        if (this.heap.length === 1) return this.heap.pop();
        
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        
        return top;
    }
    
    _bubbleDown(i) {
        const n = this.heap.length;
        
        while (true) {
            let best = i;
            const left = this.left(i);
            const right = this.right(i);
            
            if (left < n && !this.compare(this.heap[best], this.heap[left])) best = left;
            if (right < n && !this.compare(this.heap[best], this.heap[right])) best = right;
            
            if (best === i) break;
            
            [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
            i = best;
        }
    }
    
    peek() {
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
}

function solution(jobs) {    
    const n = jobs.length;
    const jobsWithOrder = jobs.map(([req, dur], order) => [order, req, dur]);
    jobsWithOrder.sort((req, dur) => req[1] - dur[1] || req[0] - dur[0]);
    
    const pq = new PriorityQueue((a, b) => {
        if (a[2] !== b[2]) return a[2] < b[2];
        if (a[1] !== b[1]) return a[1] < b[1];
        return a[0] < b[0];
    })
    
    let time = 0;
    let index = 0;
    let total = 0;
    
    while (index < n || pq.size() > 0) {
        while (index < n && jobsWithOrder[index][1] <= time) {
            pq.push(jobsWithOrder[index++]);
        }
        
        if (pq.size() === 0) {
            time = jobsWithOrder[index][1];
            continue;
        }
        
        const [order, req, dur] = pq.pop();
        time += dur;
        total += (time - req);
    }
    
    return Math.floor(total / n);
}