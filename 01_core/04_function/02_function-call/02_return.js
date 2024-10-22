// 24-10-22 (화) 4교시 이어서, return

function hello(name) {
    return `${name} 헬로우~`;
    // 자바와 마찬가지로 return은 가장 마지막 줄에 있어야 함.
    // 자바스크립트는 error가 아닌, 무시를 하게 된다.
    console.log(`asdasda`);
};

console.log(hello(`김규남`)); // 김규남 헬로우~ 출력

function fuc (){
    console.log('함수 호출됨...');

    return; // undefined , return 구문이 없어도 undefined가 출력        
    // 반환값을 명시적으로 지정하지 않으면 undefined가 된다.
    // 생략하더라도 undefined 출력
}
console.log(fuc());
/*
함수 호출됨...
undefined 
*/
