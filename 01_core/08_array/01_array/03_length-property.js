// 24-10-23 (수) 5~6교시, array(length)

/* length 프로퍼티는 요소의 개수를 나타내는
    0 이상의 정수를 value로 가지고 있다. */

console.log([].length); // 0 출력

const arr = [1 ,2 ,3, 4, 5]
console.log(arr.length) // 5 출력

// 기존 배열에 값 추가 push();
arr.push(6); // 인자로 전달한 요소 기존 배열에 추가
console.log(arr.length); // 6 출력
// pop() 기존 배열의 마지막 요소 제거
arr.pop();
console.log(arr.length); // 5 출력

// 길이 프로퍼티에 숫자값을 명시적으로 할당할 시,
// 만약 현재 배열보다 작다면 배열의 길이를 줄이게 된다.
arr.length = 3; // 3을 직접 할당
console.log(arr); // [ 1, 2, 3 ] 출력

arr.length = 5; // 다시 늘린다고 해서 돌아오지 않는다
console.log(arr); // [ 1, 2, 3, <2 empty items> ]

// 6교시, 자바스크립트 배열의 또 하나의 특징은 희소 배열 허용
// 희소 배열이란, 연속적으로 위치하지 않고 비어있는 것을 의미
const space = [ , 2, , 4]; // 1,3번째 공간에 값 넣지 않음
console.log(space); // [ <1 empty item>, 2, <1 empty item>, 4 ]
console.log(space.length); // 4 출력 (비어있는 공간도 포함)

/* 일반적인 배열의 길이는 요소의 개수를 의미한다.
    따라서 배열의 길이와 요소 개수는 항상 일치하지만,

    자바스크립트에서 배열은 길이와 요소 개수가
    항상 일치할 수 없는 것에 주목해야 한다. (배열을 흉내낸 것 뿐)*/