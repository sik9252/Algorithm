function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function solution(s) {
    var answer = '';
    let word = [];
    
    s = s.split(" ");
    s.map((e) => word.push(capitalize(e)));
    answer = [...word].join(",").replaceAll(","," ");
    
    return answer;
}