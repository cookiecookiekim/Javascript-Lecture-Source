// 24-10-21 (월) 3교시 undefined , null 

/* 04. undefined (말 그대로 찾지 못한다. 라는 뜻)
    undefined 타입의 값은 undefined가 유일하다.
    ex) var test;
    위와 같이 선언된 변수는 암묵적으로 undefined 값으로 초기화 된다. 

    자바스크립트 언어를 동작하게 만드는 것은 자바스크립트 엔진이라는 것이다. 
    undefined는 엔진이 변수를 초기화 할 때 사용하는 값으로 실제 개발자들이
    undefined로 초기화 하는 것은 지양한다. */

    var undef; // 선언
    console.log(undef); // undefined 출력

    /* null 타입 
        null → 아무것도 참조하지 않는다. 
        그렇다는 것은 가비지 컬렉터가 메모리를 청소할 때 null을 제거한다. */
var nullVal = 'hi';
nullVal = null; // null을 덧입히기.
console.log(nullVal); // null 출력