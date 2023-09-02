// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다.
// 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180

// 제한사항
// 0 < angle ≤ 180
// angle은 정수입니다.

// 입출력 예
// angle	result
// 70	1
// 91	3
// 180	4

// 입출력 예 #1
// angle이 70이므로 예각입니다. 따라서 1을 return합니다.
// 입출력 예 #2
// angle이 91이므로 둔각입니다. 따라서 3을 return합니다.
// 입출력 예 #2
// angle이 180이므로 평각입니다. 따라서 4를 return합니다.

function solution(angle) {
  if (angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (angle < 180) {
    return 3;
  } else if (angle === 180) {
    return 4;
  }
}

function solution2(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
// filter()는 JavaScript의 배열 메소드 중 하나로, 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 만드는 데 사용됩니다.
// 이 메소드는 원본 배열을 변경하지 않습니다.
// filter() 메소드에 전달되는 함수(콜백 함수)는 각 요소에 대해 실행되며, 그 결과가 true인 요소만으로 구성된 새로운 배열을 생성합니다.
// 콜백 함수에서 false를 반환하면 해당 요소는 새로운 배열에 포함되지 않습니다.

function solution3(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

function solution4(angle) {
  switch (angle) {
    case 90:
      return 2;
    case 180:
      return 4;
    default:
      return angle > 0 && angle < 90 ? 1 : 3;
  }
}
// switch 문은 JavaScript에서 다중 조건 분기를 처리할 때 사용하는 제어문입니다.
// switch 문은 표현식을 평가하고 그 값과 일치하는 case 레이블을 찾아 해당 블록을 실행합니다.
// case: 이 키워드는 switch 문에서 특정 경우를 나타냅니다. 각 case는 평가될 수 있는 값 또는 표현식을 가질 수 있으며,
// 이 값이나 표현식이 switch의 괄호 안에 있는 표현식과 일치하면 해당 코드 블록이 실행됩니다.
// break: 이 키워드는 선택적으로 사용되며, 현재의 case 코드 블록 실행을 중지하고, 'switch' 문 바로 다음의 코드로 제어를 전달합니다.
// default: 모든 'case'가 매칭되지 않을 때 실행되는 부분입니다. 즉, 위의 모든 조건이 거짓일 경우에 마지막으로 실행됩니다.
function solution5(angle) {
  let answer = 1;

  if (angle >= 90) answer++;
  if (angle > 90) answer++;
  if (angle >= 180) answer++;
  if (angle > 180) answer++;

  return answer;
}

console.assert(solution(70) === 1, "failed1");
console.assert(solution(91) === 3, "failed2");
console.assert(solution(180) === 4, "failed3");
