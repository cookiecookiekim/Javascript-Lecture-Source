// 24-10-23 (수) 5교시, array(자바와 자바스크립트의 차이)

/* 자바에서의 배열은 각 요소가 동일한 데이터 크기를 가지며
    연속적으로 이어져 인덱스를 통해 요소에 접근할 수 있다.
    --------------------------------------------------
    자바스크립트의 배열은 일반적인 배열을 흉내낸 특수한
    객체로써 각각의 메모리 공간이 동일한 크기를 갖지
    않아도 되며(다른 자료형 저장 가능)
    연속적으로 이어지지 않아도 된다. */

console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));
// writable : true이면 값을 수정할 수 있고 false면 읽기만 가능
// enumeralbe : true이면 반복문을 통해 나열 가능, false면 불가능
// configurable : true이면 프로퍼티 삭제 or 수정 가능
/*(키)      (값)
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
*/

// 자바스크립트에서 모든 값은 배열의 요소가 될 수 있다.

const arr = [
    `홍길동`
    ,20
    ,true
    ,null
    ,NaN
    ,undefined
    ,Infinity
    ,-Infinity
    ,[]
    ,{}
    ,function(){}
];

console.log(arr); // 잘 출력
console.table(arr); // 잘 출력