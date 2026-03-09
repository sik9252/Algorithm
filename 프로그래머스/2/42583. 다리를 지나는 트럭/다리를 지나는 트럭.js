function solution(bridge_length, weight, truck_weights) {    
    const bridge = Array.from({length: bridge_length}, () => 0);
    let currentBridgeWeight = 0;
    let time = 0;
    let head = 0;
    let truckIdx = 0;
    
    while (truckIdx < truck_weights.length || currentBridgeWeight > 0) {
        const out = bridge[head];
        currentBridgeWeight -= out;
        bridge[head] = 0;
        time++;
        
        const next = truck_weights[truckIdx];
        if (currentBridgeWeight + next <= weight) {
            bridge[head] = next;
            currentBridgeWeight += next;
            truckIdx++;
        }
        
        head = (head + 1) % bridge_length;
    }
    
    return time;
}