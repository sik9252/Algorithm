function gcd(a, b) {
    while (b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}

function lcm(a, b) {
    let c = gcd(a, b);
    
    return a * b / c;
}

function solution(arr) {
    var answer = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }
     
    return answer;
}