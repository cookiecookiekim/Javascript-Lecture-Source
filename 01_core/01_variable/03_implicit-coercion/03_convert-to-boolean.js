// 24-10-21 (월) 4교시 ★☆★☆ 암묵적 (boolean) 형변환 ★☆★☆

/* java case 
    - if(조건문)
    - int x = 10;
    - if(x)는 조건이 아니기 때문에 불가하다.
    하지만 자바스크립트는 된다. */

/* 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가되는 값)과
   Falsy값(거짓으로 평가되는 값)으로 구분 해준다. 
   
   Falsy 값은 정해져 있다. (Falsy 값만 외우면 된다.)

   < ★☆★ False , undefined, null, 0 , NaN, '' ★☆★ >

   위 항목은 Falsy 값이며 이 6개를 제외한 모든 값이 Truthy 값이다. */

if(true) console.log('동작하니?'); // 동작하니? 출력
if(false) console.log('동작하니?'); // 조건 만족하지 않으므로 수행되지 않음
if(undefined) console.log('동작하니?'); // undefined 는 Falsey 값이므로 수행 되지 않음
if(4) console.log('동작하니?'); // 0이 아닌 값은 Truty이므로 (동작하니?)출력,
if(null) console.log('동작하니?');  // 출력 X
if('') console.log('동작하니?') // 출력 X