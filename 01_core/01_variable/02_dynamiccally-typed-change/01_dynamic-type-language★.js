// 24-10-21 (월) 3교시 ★☆★☆★☆ 동작 원리 ★☆★☆★☆

/*  1. 정적 타입 (static / strong type)
    - 대표 언어 (java , c , c++ , kotlin 등등)
    - 변수를 선언할 때 데이터 타입을 반드시 명시해야 함. ex) int x = 10;
    - 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값을 반드시
      넣어 주어야 한다. ex) int x = 10;, x = true (x)
    - 장점 : 컴파일(번역) 시점에 타입에 대한 검사를 진행 한다는 것이
            안정적인 코드를 만들어, 런타임 시점에 에러를 줄일 수 있다.

    2. 동적 타입 (dynamic / weak type)
    - 대표 언어 (javascript , python 등등) 
    - 자바스크립트는 var , let , const라는 키워드로 변수를 선언할 뿐,
    - 데이터 타입을 사전에 선언하지 않는다. 

    - 즉, 동적 타입 언어는 변수의 선언이 중요한 것이 아닌,
      값을 집어 넣는 할당 시점에 타입이 결정되며 재 할당에 의해
      언제든지 값의 데이터 타입이 동적으로 변경될 수 있다.
    - 단점 : 변수의 값이 언제든지 변경될 수 있기 때문에
            값을 확인하기 전까지 데이터 타입을 확신할 수 없다. 
            개발자의 의도와 다르게 자바스크립트 엔진에 의해
            타입이 변경될 수 있기 때문에 값의 불확실성이 크다.
    - 장단점 : 유연성은 높지만 값에 대한 신뢰성이 떨어진다. */

var test;
console.log(typeof test); // 1회차 : 선언만 해놨기 때문에 undefined 출력

test = 1;
console.log(typeof test); // 2회차 : number 출력

test = '안녕';
console.log(typeof test); // 3회차 : string 출력

test = true;
console.log(typeof test); // 4회차 : boolean 출력

test = Symbol('asd');
console.log(typeof test); // 5회차 : symbol 출력

// 이런식으로 자바스크립트 언어는 동적으로 값을 할당함에 따라 데이터 타입 변경.

// test = {}; 객체 (object 출력()
// test = []; 객체(배열)
test = function(){}; // 함수 → 객체 (function 출력)
console.log(typeof test);

// 동적 타입의 언어 사용 시 주의점
// 1. 변수는 꼭 필요한 경우에 제한적으로 사용.
// 2. 변수의 유효범위(스코프)를 최대한 좁게 만들어서 사용한다.
// 3. 전역 변수를 지양한다.
// 4. 변수 보다는 상수를 사용해서 값의 변경을 막아라.
// 5. 변수명을 목적과 상황에 맞게 짓기.