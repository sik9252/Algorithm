function makeGram(str) {
    const strArr = str.split("");
    
    return Array
        .from({ length: str.length - 1 }, (_, i) => str[i] + str[i + 1])
        .filter(pair => /^[a-z]{2}$/.test(pair));
}

function makeMap(strArr) {
    const arrMap = new Map();
    
    for (const s of strArr) {
        if (arrMap.has(s)) {
            arrMap.set(s, arrMap.get(s) + 1);
        } else {
            arrMap.set(s, 1)
        }
    }
    
    return arrMap;
}

function makeIntersection(map1, map2) {
    const result = [];
    
    for (const [key, c1] of map1.entries()) {
        if (!map2.has(key)) continue;
        const c2 = map2.get(key);
        for (let i = 0; i < Math.min(c1, c2); i++) {
            result.push(key);
        }
    }
    
    return result;
}

function makeUnion(map1, map2) {
    const result = [];
    const allKeys = new Set([...map1.keys(), ...map2.keys()]);
    
    for (const key of allKeys) {
        const count1 = map1.get(key) || 0;
        const count2 = map2.get(key) || 0;
        
        const times = Math.max(count1, count2);
        
        for (let i = 0; i < times; i++) {
            result.push(key);
        }
    }
    
    return result;
}

function solution(str1, str2) {
    var answer = 0;

    const str1Gram = makeGram(str1.toLowerCase());
    const str2Gram = makeGram(str2.toLowerCase());

    const str1Map = makeMap(str1Gram);
    const str2Map = makeMap(str2Gram);
    
    const intersection = makeIntersection(str1Map, str2Map);
    const union = makeUnion(str1Map, str2Map);
    
    answer = intersection.length === 0 && union.length === 0 ? 1 : intersection.length / union.length;
    
    return parseInt(answer * 65536);
}