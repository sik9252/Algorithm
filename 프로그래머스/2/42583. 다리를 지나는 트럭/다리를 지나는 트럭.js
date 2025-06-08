function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = Array(bridge_length).fill(0);
  
    while (bridge.length) {
        bridge.shift();
        answer += 1;

        if (truck_weights.length)  {
            let sum = bridge.reduce((pre, curr) => pre + curr, 0);
            if (sum + truck_weights[0] <= weight) {
                bridge.push(truck_weights.shift());
            } else {
                bridge.push(0);
            }
        }
    }

    return answer;
}