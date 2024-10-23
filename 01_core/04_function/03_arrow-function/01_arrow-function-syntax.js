// 24-10-22 (화) 5교시 ★☆★☆★ arrow-function의 문법 ★☆★☆★ 앞으로 많이 쓸 것이니 알아두기.

/* ES6 버전에서 도입된 화살표 함수는 function 키워드 대신,
    =>를 사용해서 더 간략하게 함수를 정의하는 것을 의미함. */

var message = function (){
    return `hellow world!!!`;
};
console.log(message()); // hellow world!!! 잘 출력됨.


// function 생략 가능
// function 생략 이후, 생략했다는 걸 알리기 위해 => 로 사용한다.
message = () => {
    return `Arrow Function!!`;
};
console.log(message()); // Arrow Function!! 잘 출력됨


// 더 줄이는 방법
// 명령문{실행 할 코드}가 하나만 있는 경우, 중괄호 생략 가능
message = () => `Arrow Function is Simple`;
console.log(message()); // Arrow Function is Simple 잘 출력
// 예를들어  var a = arg1
        // ,var b = arg2 이런식으로 여러가지인 경우엔 중괄호{}가 꼭 필요하다


// 매개변수가 있을 시 화살표 함수 사용
message = (arg1 , arg2) => "Arrow" + arg1 + arg2;
console.log(message(`Function` , `argument!!`)); // ArrowFunctionargument!! 잘 출력됨


// 매개변수가 하나이면 소괄호 생략 가능
message = arg1 => `arrow arg1` + arg1;
console.log(message(`very simple`)); // arrow arg1very simple 출력
// message = function(arg1){
//     return `arrow arg1` + arg1;
// } 이 구문을 생략한 것.