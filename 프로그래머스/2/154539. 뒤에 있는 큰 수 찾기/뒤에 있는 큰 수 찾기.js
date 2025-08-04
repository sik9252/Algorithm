function solution(numbers) {
    const N = numbers.length;
    const answer = new Array(N).fill(-1);

    const stack = [];

    for (let i = 0; i < N; i++) {
      // 스택이 비어있지 않고, 현재 numbers[i]가 스택 맨 위 인덱스의 값보다 크면 뒷 큰수를 찾은 것
      while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
        const idx = stack.pop();
        answer[idx] = numbers[i];
      }
      // 아직 뒷 큰수를 못 찾은 현재 인덱스도 스택에 넣어둠
      stack.push(i);
    }

    return answer;
}
