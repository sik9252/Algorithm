function solution(s, skip, index) {
    let answer = '';
    let alphaList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < skip.length; i++) {
        for (let j = 0; j < alphaList.length; j++) {
            if (skip[i] === alphaList[j]) {
                alphaList.splice(j, 1);
            }
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        const currentIndex = alphaList.indexOf(s[i]);
        answer += alphaList[(currentIndex + index) % alphaList.length]
    }
    
    return answer;
}