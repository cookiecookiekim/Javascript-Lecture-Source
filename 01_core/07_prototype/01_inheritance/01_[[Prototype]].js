// 24-10-23 (수) 4교시, 상속 (객체 리터럴 사용 시)

/* [[Prototype]]
 자바스크립트에서 객체는 [[Prototype]] 이라는 숨겨진 프로퍼티를 가지고 있다.
    이건 null이거나, 다른 객체에 대한 참조 */

const user = {
     id : `user01`
    ,login : function(){
        console.log(`${this.id}님 로그인 성공!`);
    }
};
const student = {
    name : `김규남`
};

/* __proto__ (자바의 extends라고 생각)
→ [[Prototype]]의 getter와 setter의 역할을 한다. */

// 학생과 유저를 연결하겠다.
student.__proto__ = user;
// [[Prototype]]로 접근이 불가하기에 __proto__를 통해 접근
console.log(student.id); //user01 출력 (user에 있는 key(id) 출력)

/* student의 프로토타입은 user로 설정했다.
    이 말은 student는 user를 상속 받았다고 생각.
    student는 부모의 프로퍼티를 사용할 수 있게 되는데
    자신에게 없고 부모에게 있는 프로퍼티를 `상속 프로퍼티` 라고 함. */

// 프로토타입 체인
const ohgiraffersStudent = {
     class : 3
    ,__proto__ : student
}; // user(엄마) → student(아들) → ohgiraffersStudent(손자) 순으로 상속

console.log(ohgiraffersStudent.id); // user01 잘 출력
console.log(ohgiraffersStudent.name); // 김규남 잘 출력