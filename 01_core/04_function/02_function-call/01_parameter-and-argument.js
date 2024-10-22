// 24-10-22 (화) 4교시 이어서, 매개변수와 전달인자 (자바와 동일)

function hello(name) {
    // 마찬가지로 매개변수는 해당 함수 몸체({}) 내에서만 사용 가능
    console.log(name);

    // 모든 전달인자들은 암묵적으로 arguments 객체의 프로퍼티로 보관
    console.log(arguments);

    return `${name}님 헬로우~`;
};
// console.log(name); 밖에서는 사용 불가 

// 함수 호출
var result = hello('김규남');
console.log(result);
/*
김규남
[Arguments] { '0': '김규남' }
김규남님 헬로우~ 출력
*/

// 매개변수와 전달인자 개수 불일치 시켜보기 (적게)
// 인자의 개수를 부족하게 할 시 undefined가 됨.
result = hello();
console.log(result);
/*
undefined
[Arguments] {}
undefined님 헬로우~ 출력
*/

// 매개변수와 전달인자 개수 불일치 시켜보기 (초과)
// 초과된 인자는 무시 되지만 암묵적으로 Arguments라는 객체에 보관은 한다.
result = hello(`김규남`, `김규순`);
console.log(result);
/*
김규남
[Arguments] { '0': '김규남', '1': '김규순' }
김규남님 헬로우~ 출력
*/

// ============================================
function hi(name = '기본값') {
    
    // if(arguments.lengh !== 1 || typeof name !== 'string' || name.lengh === 0) {
    //     console.log(`인자는 1개 이어야 하며, 문자열 값이고, 빈 문자열은 허용하지 않습니다.`);
    // } // 전달 되었는지 확인용

    return `${name} 님 하이~`;
};

// arguments 객체를 이용해서 적절한 인자가 전달 되었는지 확인하기.
// result = hi('김규남' , `김규순`);
// result = hi(1);
// result = hi('');
result = hi();
console.log(result);