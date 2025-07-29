class PriorityQueue {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  parent(i) { return (i - 1) >> 1; }
  left(i)   { return i * 2 + 1; }
  right(i)  { return i * 2 + 2; }

  push(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  _bubbleUp(i) {
	  // 더 이상 올라갈 곳이 없을 때까지
    while (i > 0) {
	    // 부모와 비교해 우선순위가 높으면
      const p = this.parent(i);
      if (this.compare(this.heap[p], this.heap[i])) break;
      // 자리 변경 (swap)
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

	// 루트(우선순위 1등)을 꺼내고
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
	  // 마지막 요소를 루트로 옮긴 뒤
      let best = i;
      const l = this.left(i), r = this.right(i);
      if (l < n && !this.compare(this.heap[best], this.heap[l])) best = l;
      if (r < n && !this.compare(this.heap[best], this.heap[r])) best = r;
      if (best === i) break;
	  // 두 자식과 비교해 가장 우선순위가 낮은(높은) 쪽으로 자리 교환
      [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
      i = best;
    }
  }

  // 가장 우선순위가 높은(낮은) 요소 조회
  peek() { return this.heap[0]; }
  size() { return this.heap.length; }
}

function solution(scoville, K) {
    var answer = 0;
    const minPq = new PriorityQueue((a, b) => a < b);
    
    for (let i=0; i<scoville.length; i++) {
        minPq.push(scoville[i]);
    }
    
    while (minPq.peek() < K) {
        if (minPq.size() === 1) return -1;
        
        const firstMinV = minPq.pop();
        const secondMinV = minPq.pop();
        
        minPq.push(firstMinV + (secondMinV * 2));
        answer++;
    }
    
    return answer;
}