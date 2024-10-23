// 24-10-23 (수) 1교시 ★☆ call back 함수 ★☆ 호출 흐름 파악하기.

/* 콜백 함수란? (흐름은 자바의 메서드와 같음)
    함수의 매개변수를 통해 다른 함수 내부로 전달되는 함수.
그리고 이렇게 매개변수를 통해 함수를 전달받는 본체를 고차함수라 함. 
(전달해줌 : 콜백 함수 / 매개변수 받아줌 : 고차함수)
콜백 함수는 고차 함수에 전달이 되어 헬퍼 함수 역할을 하게 됨. */

// 값을 증가 시키는 함수
function increase(value) {
    return value + 1;
};

// 값을 감소 시키는 함수
function decrease(value) {
    return value -1;    
};

// 콜백 함수를 전달 받는 고차 함수
function apply(func , value) {
    return func(value);
};

console.log(apply(increase, 5));
console.log(apply(decrease, 5));

console.log(apply(function(value){return value * 2;}, 5));

/* 이런식으로 변하지 않는 공통로직(ex) 더하기, 빼기 함수)은
    미리 함수로 정의 해두고 필요 시에 호출하는 방식 
    
    콜백함수가 중요한 이유는 자바스크립트의 특징인
    함수형 프로그래밍의 패러다임 뿐 아니라
    비동기 처리 (이벤트 , 타이머 , ajax) 등등에
    활용이 가장 많이 되는 패턴이다. */

// sort 메서드는 콜백 함수를 전달 받는다.
// sort는 정렬하는 내장 메서드
console.log([3 , 2 , 1 , 5, 4].sort(function(left,right){return right-left}));
// 전달 인자 2개 이상을 보내서 두 수 중에 크거나 작은 수를 알아서 판단하여 자리 바꿔줌.
// [ 5, 4, 3, 2, 1 ] 출력 (역순으로 출력) - 나중에 자세히