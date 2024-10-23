// 24-10-23 (수) 4교시, new 키워드 사용 안 할 시 확인해보기.

function Student(name, age) { // 생성자 함수
    console.log(this);

    /* new라는 키워드로 해당 함수를 호출하지 않으면 재귀 함수를 이용하여,
         new 키워드를 붙인 함수를 실행한다.*/
    if(!new.target) { // 만약 new라는 키워드를 타겟이 붙이지 않았다면,
        return new Student(name , age);
    };

    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name}(은)는 ${this.age}세 입니다.`
    };
};

/* 일반 함수와 생성자 함수의 차이는 특별히 존재하지 않는다.
    따라서 생김새에 따라 구분하기 위해 생성자 함수는
    대문자로 시작하려 노력하는 것이 일반적이다.
    → new 연산자와 함께 사용 시 : 생성자 함수
    → new 없이 사용 시         : 일반 함수 */

 // new 키워드 없이 해보기
const student = Student(`김규남`,20);
/* new 키워드 없이 사용하면 this는 student를 가리키는 것이 아닌,
    전역 객체를 가리키게 된다. */
console.log(student); // 이상하게 엄청 긴 게 출력, 마지막에 undefined 출력
                    // 이후 if(!new.target) 구문 넣으니 undefied 말고, 잘 출력

const student2 = new Student(`김규남` , 20);
console.log(student2) // 생성자로 인식하여 잘 출력

// new 키워드는 java 사용하지 않는 개발자면 어색하다.
