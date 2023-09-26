// 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 0 < age ≤ 120
// 나이는 태어난 연도에 1살이며 1년마다 1씩 증가합니다.

// 입출력 예
// age	result
// 40	1983
// 23	2000

// 입출력 예 설명
// 입출력 예 #1
// 2022년 기준 40살이므로 1983년생입니다.
// 입출력 예 #2
// 2022년 기준 23살이므로 2000년생입니다.

function solution(age) {
  var answer = 2022 - age + 1;
  //   console.log(answer);
  return answer;
}

function solution2(age) {
  return new Date().getFullYear() - age + 1;
}

console.assert(solution2(40) === 1983, "failed1");
console.assert(solution2(23) === 2000, "failed2");

// new Date()는 JavaScript에서 제공하는 내장 객체 생성자입니다. 이를 사용하여 새로운 Date 객체를 생성할 수 있습니다.
// new Date()이 인자 없이 호출되면, 현재 시간을 기준으로 Date 객체가 생성됩니다.
// getFullYear() 메소드는 Date 객체에서 연도를 가져오는 데 사용됩니다.
// 이 메소드는 4자리의 연도(예: 2023)를 반환합니다.
// 따라서 코드에서 new Date().getFullYear() 부분은 현재 연도를 가져오는 코드입니다.
// console.log(new Date().getFullYear());
