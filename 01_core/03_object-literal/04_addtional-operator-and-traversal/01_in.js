// 24-10-22 (화) 3교시 이어서, in 연산자 (존재 여부)

/* in 연산자는 존재 여부를 확인하는 연산자
    → SQL에서 사용했던 것과 동일한 기능 */

var student = {
     name : '김규남'
    ,age : 20
    ,test : undefined
};
// student라는 객체에 name이라는 키 존재 여부
console.log('name' in student); // true
// aaaa는 존재하지 않기 때문에 false
console.log('aaaa' in student); // false