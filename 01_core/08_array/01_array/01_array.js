// 24-10-23 (수) 5교시, array(자바의 List 라고 생각)

/* java의 배열은 원시 자료형을 저장하는 용도로 사용했다.
    그리고 java의 경우에는 type이 굉장히 중요하기 때문에
    하나의 배열은 같은 타입의 데이터만 취급 할 수 있었다.
    
자바스크립트의 배열은 더 넓은 범위로 생각하기.(뭐든 넣을 수 있음)*/

// 1. 배열 리터럴을 사용해서 배열 생성
// 배열이 가지고 있는 값을 요소라고 부르며
// 배열은 자바스크립트의 모든 값을 넣을 수 있음.
const arr = [`바나나`, `복숭아`,`키위`];
console.log(arr);

// 2. 배열 생성자 함수를 사용하여 만들 수 있음.
// 인자가 없는 경우 빈 배열 생성
const arr2 = new Array(); // 배열 생성자 → new Array();
console.log(arr2); // [] 출력 (인자가 없으면 빈 배열 생성)

// 인자가 1개이며, 숫자인 경우 전달한 수 만큼의 length를 가진 배열 리턴
const arr3 = new Array(10); // → 10칸짜리 공간 만들겠다.
console.log(arr3); // [ <10 empty items> ] 출력

// 인자가 2개 이상 이거나(||) 숫자가 아닌 경우에는
// 전달 인자를 요소로 같은 배열 생성.
const arr4 = new Array(1, 2, 3);
console.log(arr4); // [ 1, 2, 3 ] 출력

// 3. Array.of() 메서드
// 길이와 무관하게, 전달한 인자를 요소로 갖는 배열 생성.
console.log(Array.of(10)); // [ 10 ] 출력
// of는 프로퍼티인데 함수가 할당 돼있는 프로퍼티이다 (중요하지 않음)

// 요소에 접근하는 방법
// int[] arr = new int[]{1, 2, 3}; (예)자바)
// 1 → 접근하려면? arr[0] (예)자바)

console.table(arr)
console.log(arr[0]); // 바나나 출력 → [] 표기법.

// 자바스크립트에서 객체는 프로퍼티의 집합이다.
// 원시타입이 아닌 모든 값은 객체이다.

// 배열은 요소의 개수, 즉 배열의 길이를 나타내는
// length 라는 프로퍼티(키)를 가지고 있음
console.log(arr.length); // 3 출력 (바나나, 복숭아, 키위 - 3개)

// 배열은 자바와 마찬가지로 length라는 프로퍼티를 
// 갖기 때문에 for 문을 사용할 수 있다.

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]); // 바나나 복숭아 키위 순서대로 출력
}

console.log(typeof arr); // object 출력