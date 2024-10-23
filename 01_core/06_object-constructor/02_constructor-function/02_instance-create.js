// 24-10-23 (수) 3교시, 생성자 함수 확인

function Student(name, age) { // 생성자 함수
    // 1. this
    console.log(this); // Student {} ← 자기 자신
    this.name = name; // name이라는 key에 전달받은 `김규남`을 넣겠다.
    this.age = age;
    this.getInfo = function () {
        return `${this.name}(은)는 ${this.age}세 입니다.`
    };
}; // 하나의 틀을 만들어 놓기

const student = new Student(`김규남` , 20);
console.log(student);