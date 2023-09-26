// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

// 입출력 예
// num1	num2	result
// 10	5	2
// 7	2	3

// 입출력 예 #1
// num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.
// 입출력 예 #2
// num1이 7, num2가 2이므로 7을 2로 나눈 몫 3을 return 합니다.

const solution = (num1, num2) => {
  var answer = Math.floor(num1 / num2);
  console.log(answer);
  return answer;
};

console.assert(solution(10, 5) === 2, "failed1");
console.assert(solution(7, 2) === 3, "failed2");

// Math.floor() 함수는 JavaScript에서 제공하는 내장 함수로, 주어진 숫자보다 크지 않은 가장 큰 정수를 반환합니다.
// 다시 말해, Math.floor()는 주어진 숫자를 '내림' 처리합니다.
