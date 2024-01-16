function solution(keymap, targets) {
    var answer = [];
    
    const minKeyValue = {};
    
    // keymap에 대한 최소키를 미리 저장해두고
    keymap.forEach((key) => {
        for (let i = 0; i < key.length; i++) {
           minKeyValue[key[i]] = minKeyValue[key[i]] ? Math.min(minKeyValue[key[i]], i + 1) : i + 1;
        }
    })
    
    // target 돌면서 keymap에 있으면 해당 최소키 값 합산, 없으면 break 후 -1 저장
    targets.forEach((target) => {
        let total = 0;
        for (let i = 0; i < target.length; i++) {
            if (minKeyValue[target[i]]) {
                total += minKeyValue[target[i]];
            } else {
                total = -1;
                break;
            }
        }
        answer.push(total);
    })
    
    
    return answer;
}