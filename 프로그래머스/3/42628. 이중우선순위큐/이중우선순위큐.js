class PriorityQueue {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }
    
    parent(i) { return (i-1) >> 1; };
    left(i) { return (i*2) + 1; };
    right(i) {return (i*2) + 2; };
    
    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length -1);
    };
    
    _bubbleUp(i) {
        while (i > 0) {
            const p = this.parent(i);
            if (this.compare(this.heap[p], this.heap[i])) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    };
    
    pop() {
        if (!this.heap.length) return;
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return top;
    };
    
    _bubbleDown(i) {
        const n = this.heap.length;
        while (true) {
            let best = i;
            const l = this.left(i);
            const r = this.right(i);
            
            if (l < n && !this.compare(this.heap[best], this.heap[l])) best = l;
            if (r < n && !this.compare(this.heap[best], this.heap[r])) best = r;
            
            if (best === i) break;
            
            [this.heap[best], this.heap[i]] = [this.heap[i], this.heap[best]];
            i = best;
        }
    };
    
    peek() { return this.heap[0] };
    size() { return this.heap.length; };
}

class DualPriorityQueue {
    constructor() {
        this.minPq = new PriorityQueue((a, b) => a < b);
        this.maxPq = new PriorityQueue((a, b) => a > b);
        this.countMap = new Map();
        this._size = 0;
    }
    
    push(val) {
        this.minPq.push(val);
        this.maxPq.push(val);
        this.countMap.set(val, (this.countMap.get(val) || 0) + 1);
        this._size++;
    }
    
    _clean(pq) {
        while (pq.size() && (this.countMap.get(pq.peek()) || 0) === 0) {
            pq.pop();
        }
    }
    
    popMin() {
        this._clean(this.minPq);
        if (this.minPq.size() === 0) return null;
        const val = this.minPq.pop();
        this.countMap.set(val, this.countMap.get(val) - 1);
        this._size--;
        return val;
    }
    
    popMax() {
        this._clean(this.maxPq);
        if (this.maxPq.size() === 0) return null;
        const val = this.maxPq.pop();
        this.countMap.set(val, this.countMap.get(val) - 1);
        this._size--;
        return val;
    }
    
    peekMin() {
        this._clean(this.minPq);
        return this.minPq.peek() ?? null;
    }
    
    peekMax() {
        this._clean(this.maxPq);
        return this.maxPq.peek() ?? null;
    }
    
    size() {
        return this._size;
    }
    
    isEmpty() {
        return this._size === 0;
    }
    
    delete(op) {
        if(this._size === 0) return null;
        if (op === 1) return this.popMax();
        if (op === -1) return this.popMin();
        
        this._clean(this.minPq);
        this._clean(this.maxPq);
    }
}

function solution(operations) {
    const dpq = new DualPriorityQueue();
    
    for (const opString of operations) {
        const [op, v] = opString.split(" ");
        const subOp = parseInt(v, 10);
        
        if (op === "I") {
            dpq.push(subOp);
        } else if (op === "D") {
            dpq.delete(subOp);
        }
    }
    
    return dpq.isEmpty() ? [0,0] : [dpq.peekMax(), dpq.peekMin()];
}