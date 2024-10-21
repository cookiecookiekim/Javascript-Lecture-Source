// 24-10-21 (월) 5교시 boolean 타입 변환

/* Boolean 타입으로 명시적 타입 변환
1. Boolean() 생성자 함수 사용 
2. !!
    → 부정 논리 연산자를 2번 쓰게 되면, Boolean 타입으로 변환
    - !true → false
    - !!'java' → (!! 만난 순간 Boolean 변환, 값이 있으니) true */

// 트루시와 펄시
console.log(Boolean('java')); // truthy 이므로 true
console.log(Boolean('')); // falsy 이므로 false
// '', 0, NaN , undefined, null, false → falsy

console.log(!!'java'); // truthy 이므로 true
console.log(!!0); // 0이므로 false