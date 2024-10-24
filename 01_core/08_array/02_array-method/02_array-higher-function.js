// 24-10-24 (목) 1~3교시 ☆★☆★☆★ 배열의 고차 함수 ☆★☆★☆★ array 챕터 모두 많이 사용 예정
// 가장 중요한 챕터 (연습문제 有)

/* 배열의 고차 함수
    - 고차 함수란? 함수를 인자로 전달받는 함수 */

// sort() : 배열을 정렬해주는 함수
let numbers = [];

for(let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random()* 100) + 1;
    // 자바와 동일 Math.floor는 자바의 강제 형변환 느낌
}
console.log(`정렬 하기 전 numbers 배열 : ${numbers}`); // 정렬 안 된 랜덤 수 10개 출력
/* sort() : 오름차순이 기본 정렬이며 배열은 기본적으로 문자열 정렬되기 때문에
    한 자리수 , 세자리 수가 옳바르게 정렬되지 않음.
    따라서 다른 정렬 기준을 사용하기 위해서는
    매개변수로 compare라는 함수 전달해야 함. */
numbers.sort; // 숫자를 문자열 치환 후 정렬
console.log(`정렬 후 numbers 배열 : ${numbers}`); // 첫번째 자리수 기준 정렬

// 숫자 오름차순 정렬
// compare(a,b)의 a와 b인자는 위에 정의한 정렬의 첫번째, 두번째 값이고
// 비교가 종료 되면 두번째, 세번째 순으로 비교함.
function compare (a,b) { // 자동 형변환 (동적)
    if (a > b) return 1; // true
    if (a == b) return 0;
    if (a < b) return -1; // 앞뒤 자리 바꿔줌
}
numbers.sort(compare); // compare() 가 아니라 compare 라는 변수라고 생각하면 이름만으로 호출
console.log(`인자로 compare 함수 전달 후 정렬 : ${numbers}`);

// 숫자 내림차순 정렬
// numbers.sort(function(a,b){
//     return b-a;
// });
numbers.sort((a,b) => b-a); // 화살표 함수로 변경
console.log(`인자로 함수 작성해서 내림차순 정렬 : ${numbers}`);


/* 배열에서 제공하는 forEach() 
    - for 대체할 수 있는 고차함수
   배열.forEach(function(item, index, array){}) */

numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(item, index, array){ // 매개변수 설정(item, index, array)
    console.log(`item : ${item}`); // (value 출력)
    console.log(`index : ${index}`); // (value의 index 위치)
    console.log(`array : ${array}`); // (배열 정보 출력)
});

/* forEach()
    1번째 인자 : item 즉 요소(value)
    2번째 인자 : index 즉 요소가 위치하는 번호
    3번째 인자 : array 자신이 포함된 배열 정보 */

// 배열의 forEach로 요소 출력하기
numbers.forEach((item) => console.log(item));

// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆ 
// 배열의 map() : 배열 요소 전체를 대상으로 콜백함수 호출 후
//                  반환 값들로 <새로운 배열> 반환
// 배열.map(function(item, index, array){});
// ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆ 

const types = [true, 1, `text`].map(item => typeof item);
// 기존 배열을 순회 후 우리가 작성한 함수 내부의 조건들로 다시 새로운 배열 반환
console.log(types);
// 풀이 : 최초 item에 true가 삽입되고, true의 type은(typeof) boolean
// 풀이 : 이후 item에 1이 삽입되고, 1의 type은(typeof) number
// 풀이 : 이후 item에 `text`가 삽입되고, `text`의 type은(typeof) string

const length = [`apple`, `banana`, `mango`].map(item => item.length);
console.log(length); // 뭐 나올지 생각

/* 배열의 filter() → 검색기능에 가장 많이 사용될 예정
    - 배열의 요소 전체를 대상으로 콜백 함수 호출 후
        반환 값이 true 인 녀석들로 새로운 배열 반환 */

// 홀수 (odd)
const odds = numbers.filter(item => item % 2); // %는 나머지 값
console.log(odds); // 뭐 나올지 생각

/* 배열의 reduce() ← 알고만 있으면 좋음.
    배열을 순회하며 각 요소에 대하여 이전의 콜백함수
    실행 반환값을 전달하여 콜백 함수 실행 후 결과 반환
    - (인자1) previousValue : 이전 콜백의 반환 값
    - (인자2) currentValue : 배열 요소의 값
    - (인자3) currentIndex : 인덱스
    - (인자4) array : 자신이 속한 배열 */

numbers.reduce((pre, currV, currI, array) => { // 순서가 중요하지, 매개변수명은 중요하지 않음
    console.log(`previousValue : ${pre}`) // undefined - 함수의 return이 있고 없고 차이 알기
    console.log(`currentValue : ${currV}`)
    console.log(`currentIndex : ${currI}`)
    console.log(`array : ${array}`)
});
 // ★ 어떤 식으로 동작하는지 분석해보기.★
const sum = numbers.reduce((pre, currV) => {
    return pre + currV; // return한 결과는 다음 콜백의 첫번째 인자로 전달
});
console.log(`sum : ${sum}`);


/* 배열의 some()
    - 배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여
    결과를 boolean 타입으로 변환 */

// 배열의 요소 중 10보다 큰 값이 1개 이상 존재하는지 확인
let result = [1, 4, 5, 8, 9].some(item => item > 10); // 나중에 재할당 하려고 const가 아닌 let으로
console.log(`result : ${result}`); // false 출력 (왜 false인지 분석)

//[1,4,5,7,9] 배열에서 짝수가 있는지 확인
let result2 = [1,4,5,7,9].some(item => item % 2 == 0);
console.log(`result2 : ${result2}`)

/* some()이 하나라도 true이면 true를 반환함과 다르게,
 배열 내 모든 요소가 테스트를 통과하는 지 확인 → every() */
result = [1,4,5,3,2].every((item => item > 3));
console.log(`every result : ${result}`); // false

/* 배열의 find()
    - 배열을 순회하며 각 요소에 대하여 인자로 주어진
    콜백함수를 실행하여 결과가 참인 첫번째 요소를 반환,
    참인 요소가 존재하지 않으면 undefined */

const student = [
     {name : `조평훈` ,score : 100}
    ,{name : `김남규` ,score : 95}
    ,{name : `김규남` ,score : 85}
];
result = student.find(item => item.name === `김규남`);
                // ==도 되는데 type 일치를 위해 ===해야 안전한 코드
console.log(result);

//student 배열에서 90점 넘는 학생만 추출하기.
result = student.find(item => item.score >= 90);
console.log(result); // 이렇게 find를 하면 90점 넘는 애 하나 찾고 땡, 틀린 답

result = student.filter(item => item.score >= 90);
console.log(result); // 필터로 찾는다.