function isPrime(number) {
    if (number === 0 || number === 1) return false;
    
    for (let i=2; i <= number/2; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

function permutation(arr, r) {
    const result = [];
    const used = Array(arr.length).fill(false);
    
    function dfs(path) {
        if (path.length === r) {
            result.push([...path]);
            return;
        }
        
        for (let i=0; i < arr.length; i++) {
            if (used[i]) continue;
            
            used[i] = true;
            path.push(arr[i]);
            dfs(path);
            path.pop()
            used[i] = false;
        }
    }
    
    dfs([]);
    
    return result;
}

function solution(numbers) {
    var answer = 0;
    const numArr = numbers.split("");
    const cases = new Set();
    
    for (let i=1; i <= numArr.length; i++) {
        permutation(numArr, i).forEach((e) => {
            cases.add(parseInt(e.join(''), 10))
        })
    }
    
    cases.forEach((e) => {
        if (isPrime(e)) answer++;
    })
        
    return answer;
}