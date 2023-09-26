// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000

// 입출력 예
// n	result
// 10	30
// 4	6

// 입출력 예 #1
// n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.
// 입출력 예 #2
// n이 4이므로 2 + 4 = 6을 return 합니다.

const solution = (num) => {
  let answer = 0;
  for (let i = 0; i <= num; i = i + 2) {
    answer = answer + i;
    console.log(answer);
  }
  console.log(answer);
  return answer;
};

function solution2(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}

function solution3(n) {
  var answer = 0;
  for (let i = 2; i <= n; i += 2) answer += i;
  return answer;
}

function solution4(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      answer += i;
    }
  }
  return answer;
}

function solution5(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
}
console.log(solution5(10));
console.assert(solution5(10) === 30, "failed1");
console.assert(solution5(4) === 6, "failed2");
