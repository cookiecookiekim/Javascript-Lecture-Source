// 24-10-21 (월) 2교시, 자바스크립트 첫 시간

// .js라는 파일을 자바스크립트 파일 읽는 용도
/* Data-type은 값의 종류를 말하며 자바스크립트는 7개의 데이터 타입을 제공한다.

01. 숫자 관련 자료형 
자바의 경우 정수와 실수를 구분하여 int, long, float, double 등등 다양한 숫자 타입 제공 
ex) int x = 10;
    하지만 자바스크립트의 경우에는 하나의 숫자 타입만 존재하며 모든 수를 실수로 처리 */

// 변수를 선언하는 키워드 var
var integer = 10;
var double = 5.5;
var negative = -10;

// 자바에서는 출력할 때, sout이다.
// 자바스크립트에서는 console.log();

// ctrl + alt + n
console.log(10 === 10.0); // true 출력 (=== 는 타입까지 일치하는지의 키워드)
// 자바로 치면 int와 double 자료형이므로 false가 나와야 하지만 자바스크립트는 모두 실수이므로 true
console.log(10 / 4); // 2.5 출력 (자바는 몫인 2가 나오는 반면에 2.5 출력)

/* 숫자 타입은 추가적으로 세가지의 특별한 값을 표현할 수 있다. 
    Infinity : 무한대
    -Infinuty : 음의 무한대
    NaN : 산술 연산 불가 Not a Number */

console.log(10 / 0); // Infinity 출력
console.log(10 / -0); // -Infinity 출력
console.log(1 * '문자열'); // NaN 출력 
// → 에러가 안 난다. 장단점 생각해보기