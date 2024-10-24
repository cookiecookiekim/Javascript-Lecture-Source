// 24-10-23 (수) 3교시, 생성자 함수

/* 생성자 함수 */

// 객체 리터럴에 의한 객체 생성과 비교
const student1 = {
     name : `김규남`
    ,age : 20
    ,getInfo : function(){
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

const student2 = {
    name : `김규순`
   ,age : 23
   ,getInfo : function(){
       return `${this.name}(은)는 ${this.age}세 입니다.`;
   }
};

const student3 = {
    name : `김규심`
   ,age : 21
   ,getInfo : function(){
       return `${this.name}(은)는 ${this.age}세 입니다.`;
   }
}; // → 여러 개 만들어야 할 시 복잡해진다. 개선이 필요하다.

/* 객체 리터럴로 객체를 만들 경우 생기는 문제점.
    만약 수십명의 학생 객체를 만들어야 한다면? 
    직관적이고 간편하다는 장점이 있지만
    단 하나의 객체만을 생성한다는 단점이 존재. */

/* 이를 해결하기 위한 생성자 함수를 이용한 객체 생성 
    프로퍼티 구조가 동일한 객체를 여러 개 만들 때 간편하게 생성 가능 */
function Student(name, age) { // Student에서 S → 대문자가 포인트
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name}(은)는 ${this.age}세 입니다.`
    };
}; // 하나의 틀을 만들어 놓기


// 생성자 함수를 사용해서 객체 생성하기

const student4 = new Student(`푸바오` , 4);
const student5 = new Student(`후이바오` , 1);
console.log(student4.getInfo()); // 푸바오(은)는 4세 입니다. 출력
