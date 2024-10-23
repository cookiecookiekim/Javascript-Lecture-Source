// 24-10-23 (수) 4교시, 상속 (생성자 사용 시), (Object.creat 사용(별로 안 씀))

/* 생성자 함수의 프로토타입
    new 연산자를 사용해서 만든 객체는 생성자 함수의
    프로토타입 정보를 이용해 [[Prototype]]을 설정 */

const user = { // 리터럴 방식으로 만들어 두기
     id : `user01`
    ,login : function(){
        console.log(`${id} 님 로그인 성공~`)
    }
};

function Student(name){ // 생성자 방식으로 만들어 두기
    this.name = name;
};

Student.prototype = user; // 프로토타입으로 user 연결

// F란 생성자 함수를 뜻함
/* F.prototype은 new F 를 호출할때만 사용됨
    new F를 호출할 때 만들어지는 새로운 객체에게
    [[Prototype]]을 할당하게 된다. */

const student= new Student(`김규남`);
console.log(student.id); // user01 출력



// Object.create() 메서드를 사용해서 객체 생성하는 방법
// (많이 안 쓴다, 굳이 쓸 필요 없다~ )
// const ohgiraffers = Object.create(); 오류 발생
const ohgiraffers = Object.create(student); // 위에 student를 넣어봄
console.log(ohgiraffers); // {} 출력
console.log(ohgiraffers.id); // user01 출력