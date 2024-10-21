// 24-10-21 (월) 5교시 

/* 숫자 타입으로 명시적 타입 변환
    1. Number() 생성자 함수를 사용해서 변환
    2. parseInt, parseFloat 함수 이용(문자열 → 숫자 '만' 가능)
    3. * 산술 이용 (약간 꼼수) */

console.log(Number(true)); // 1 출력
console.log(Number('10.01')); // 10.01 출력

// int , float 소수점 절삭
console.log(parseInt('10')); // 10 출력
console.log(parseFloat('10')); // 10 출력
console.log(parseInt('10.2')); // 10 출력
console.log(parseFloat('10.2')); // 10.2 출력

console.log('10' * 1);// 아무 의미 없는 * 1을 함으로써 산술 연산 직행