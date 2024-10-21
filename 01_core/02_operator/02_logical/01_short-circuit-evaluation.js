// 24-10-21(월) 5교시 연산자 - 논리 연산자(단축 평가)

/* 논리 연산자
    || (OR)  , & (AND), !(NOT)
    단축 평가
    - 표현식을 평가하는 도중, 결과가 확정이 된 경우 
    - 나머지 과정을 생략한다. ex) A && B → A가 false 이면 B 실행안 함 */

    // OR 연산의 경우 'apple' 문자열이 Truthy값이기 때문에
    // 뒤에 banana는 볼 필요도 없이 true다
    // 그렇기 때문에 논리 연산의 결과를 결정한 apple 이라는 피 연산자 반환
    console.log('apple' || 'banana') // apple 출력
    console.log(false || 'banana') // banana 출력
    console.log('apple' || false) // apple 출력
    console.log('apple' || 'banana') // apple 출력
    console.log(false || 'banana') // banana 출력
    console.log('apple' || false) // apple 출력
    
    // AND의 경우 좌항과 우항 모두 확인을 해야하기 때문에
    // 논리 연산의 결과를 결정하는 banana 가 변환이 된다.
    console.log('apple' && 'banana') // banana 출력
    console.log(false && 'banana') // false 출력
    console.log('apple' && false) // false 출력

    console.log('=============================');
    // 단축평가를 사용하게 되면 if 문을 대체할 수 있다.
    var num = 1;

    if(num % 2 == 0)
        console.log('짝수입니다.')
    else
        console.log('홀수입니다.') // 중괄호 안 써도 됨.

    num % 2 == 0 && console.log('짝수입니다.'); // 앞에가 false이므로 출력 X
    num % 2 == 0 || console.log('홀수입니다.');// 앞에가 false여도 뒤에 truthy이므로 출력.