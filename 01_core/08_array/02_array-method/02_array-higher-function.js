// 24-10-24 (목) ☆★☆★☆★ 배열의 고차 함수 ☆★☆★☆★

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
    console.log(`item : ${item}`); // (value , value의 index 위치 , 배열 정보 출력)
    console.log(`index : ${index}`); // (value , value의 index 위치 , 배열 정보 출력)
    console.log(`array : ${array}`); // (value , value의 index 위치 , 배열 정보 출력)
});

/* forEach()
    1번째 인자 : item 즉 요소(value)
    2번째 인자 : index 즉 요소가 위치하는 번호
    3번째 인자 : array 자신이 포함된 배열 정보 */

// 배열의 forEach로 요소 출력하기
numbers.forEach((item) => console.log(item));

// 배열의 map() : 배열 요소 전체를 대상으로 콜백함수 호출 후
//                  반환 값들로 <새로운 배열> 반환
// 배열.map(function(item, index, array){});