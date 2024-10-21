// 24-10-21 (월) 6교시 optional chaining (&& 대체)

/* 옵셔널 체이닝 연산자 (더 줄인 식)
    ES11(2020년)에 도입된 연산자로서 좌항의 피연산자가
    null또는 undefined 일 때 undefined를 반환하고
    그렇지 않으면 우항의 프로퍼티 참조를 이어 나간다. */

var obj = null;

var val = obj?.value;
// var val = obj && obj.value; 과 동일한 말
console.log(val); // undefined 출력 (좌항이 null 이므로 undefined 반환)