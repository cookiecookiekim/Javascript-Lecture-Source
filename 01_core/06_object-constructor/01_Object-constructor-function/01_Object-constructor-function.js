// 24-10-23 (수) 3교시 Object (이런 게 있구나 하고 넘어가면 되는 챕터)
                    // 대문자~~ (); ← 생성자 라는 것만 알아두기

/* 객체 만드는 방법은? 
    1. 객체 리터럴 {}; (많이 사용)
    2. Object 생성자 함수
    3. 생성자          (많이 사용)
    4. Object.create 메서드 
    5. Class 
    여기서는 2. Object 생성자 함수 확인 */

// 빈 객체 생성
const student = new Object(); // Object() → Object 기본 생성자
console.log(student); // {} 출력

// 비어있는 객체에 프로퍼티 동적 추가
student.name = `김규남`;
student.age = `20`;
console.log(student); // { name: '김규남', age: '20' } 출력
// 이렇게 만들 필요는 없지만, 이런식으로도 만들 수 있다~