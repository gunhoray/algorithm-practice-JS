// 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.

// 제한사항
// -50000 ≤ num1 ≤ 50000
// -50000 ≤ num2 ≤ 50000

// num1	num2	result
// 2	3	-1
// 100	2	98

// 입출력 예 #1
// num1이 2이고 num2가 3이므로 2 - 3 = -1을 return합니다.
// 입출력 예 #2
// num1이 100이고 num2가 2이므로 100 - 2 = 98을 return합니다.

function solution(num1, num2) {
  var answer = num1 - num2;
  console.log(answer);
  return answer;
}

console.assert(solution(2, 3) === -1, "Test case 1 failed");
console.assert(solution(100, 2) === 98, "Test case 2 failed");

//console.assert는 JavaScript에서 제공하는 내장 함수로, 주어진 조건이 참인지 확인하고 그렇지 않으면 오류 메시지를 출력하는데 사용됩니다.
//이 함수는 디버깅과 테스트에 유용하게 사용될 수 있습니다.
//console.assert(assertion, message, ...values)
//assertion: 검사할 조건. 이 값이 false일 경우, 오류 메시지가 출력됩니다.
// message: assertion이 false일 때 출력되는 메시지. 문자열 또는 문자열로 변환할 수 있는 값을 넣을 수 있습니다.
// ...values: 선택적 매개변수로서, 메시지와 함께 출력되는 추가 값들입니다.
// Node.js 환경에서는 assertion이 거짓일 때 AssertionError 예외가 발생합니다. 이 점은 브라우저 환경과의 차이점으로 주의해야 합니다.
