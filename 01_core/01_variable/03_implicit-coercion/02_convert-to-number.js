// 24-10-21 (월) 4교시 

/* 2. 숫자 타입으로 암묵적 타입 변환 */

// 산술 연산자의 피연산자는 숫자여야 하기 때문에
// 숫자가 아닌 피연산자를 숫자로 암묵적으로 변환한다.
console.log(10 - '5'); // 5 출력
console.log(10 % '5'); // 0 출력
console.log(10 / '5'); // 2 출력
console.log(10 * '5'); // 50 출력
console.log(10 * 'hi'); // NaN 출력 (피연산자가 숫자 변환 불가하기 때문에 NaN)

// + 단항 연산자로 숫자가 아닌 타입을 변환할 수 있다.
console.log('======================================================');
console.log(+''); // 0 출력 (빈 문자열 → 0 변환)
console.log(+'10'); // 10 출력
console.log(+'java'); // java를 숫자로 변환할 수 없기 때문에 NaN 출력
console.log(+true); // 1 출력
console.log(+false); // 0 출력
console.log(+null); // 0 출력
console.log(+undefined); // NaN 출력 
console.log(+{}); // NaN 출력 
console.log(+[]); // 0 출력 (빈 배열은 0으로 치환)
console.log(+function(){}); // NaN 출력 