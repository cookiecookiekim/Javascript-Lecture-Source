/*
    배열의 고차함수 예제
*/
// 생성자 함수를 통해 여러 명의 회원 생성
function Student(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
    this.getInfo = () => {
        return `${this.name} 님의 성적은 ${this.score} 입니다.`;
    }
    this.getInfo2 = () => {
        return `${this.name} 님의 나이는 ${this.age} 입니다.`;
    }
    this.getInfo3 = () => {
        return `이름순 정렬 : ${this.name} 님의 나이는 ${this.age} 입니다.`;
    }
    this.getInfo8 = () => {
        return `${this.name} 님의 몸무게는 ${this.weight} 입니다.`;
    }
}
// 5명의 회원을 생성 후 ohgiraffers 배열에 담기
const member1 = new Student('조평훈', 20, 100);
const member2 = new Student('조평평', 21, 89);
const member3 = new Student('조평순', 15, 75);
const member4 = new Student('조팽팽', 24, 100);
const member5 = new Student('조핑구', 45, 49);
const ohgiraffers = [
    member1, member2, member3, member4, member5
];
// console.log(ohgiraffers);
// 만들어진 ohgiraffers 배열을 활용해서 고차함수 연습
// 모든 문제의 출력 구문은 getInfo() 를 사용해서 출력한다.
// 1. ohgiraffers 배열을 성적 순으로 정렬
// 2. ohgiraffers 배열을 나이 역순으로 정렬
// 3. ohgiraffers 배열을 이름 순으로 정렬
// 4. ohgiraffers 배열을 활용해서 성적이 50 이상인
// 사람만 출력하는 구문을 작성해보자
// 5. ohgiraffers 배열을 활용해서 성적이 70 ~ 90 이상인
// 사람만 출력하는 구문을 작성해보자
// 6. ohgiraffers 배열을 활용해서 성적이 동일한 사람을
// 출력하는 구문을 작성해보자
// 7. ohgiraffers 배열을 활용해서 조평훈 이라는 학생의
// 성적 정보를 변경해보자
// 8. ohgiraffers 배열을 활용해서 조평훈 이라는 학생의
// 몸무게 정보를 추가해보자. weight -> 80 으로 추가


// 1. ohgiraffers 배열을 성적 순으로 정렬 (해결)
console.log("1. ========================================")
const result1 = ohgiraffers.sort((a,b) => b.score - a.score);

result1.forEach(function(member){
    console.log(member.getInfo());
})

// 2. ohgiraffers 배열을 나이 역순으로 정렬 (해결)
console.log("2. ========================================")
function compare (a,b) {
    if (a.age < b.age) return 1;
    if (a.age == b.age) return 0;
    if (a.age > b.age) return -1;
}

const result2 = ohgiraffers.sort(compare);
result2.forEach(function(member){
    console.log(member.getInfo2());
})

console.log("3. ========================================")
// 3. ohgiraffers 배열을 이름 순으로 정렬 (해결)
function compare (a,b){
    if(a.name < b.name) return 1;
    if(a.name == b.name) return 0;
    if(a.name > b.name) return -1;
}
const result3 = ohgiraffers.sort(compare);
result3.forEach(function(member){
    console.log(member.getInfo2());
})

// 4. ohgiraffers 배열을 활용해서 성적이 50 이상인
// 사람만 출력하는 구문을 작성해보자 (해결)
console.log("4. ========================================")
const result4 = ohgiraffers.filter(function(member){
    return member.score >= 50;
});

result4.forEach(function(member){
    console.log(member.getInfo());
});

// 5. ohgiraffers 배열을 활용해서 성적이 70 ~ 90 이상인
// 사람만 출력하는 구문을 작성해보자
console.log("5. ========================================")

const result5 = ohgiraffers.filter(function(item){
    return 70 <= item.score && item.score <= 90;
});

result5.forEach(function(item){
    console.log(item.getInfo());
});

console.log("6. ========================================")
// 6. ohgiraffers 배열을 활용해서 성적이 동일한 사람을
// 출력하는 구문을 작성해보자
function ohgiraffersArray(ohgiraffers){
    return ohgiraffers.filter(function(item){
        item.score >= 0
    })
}

console.log("7. ========================================")
// 7. ohgiraffers 배열을 활용해서 조평훈 이라는 학생의
// 성적 정보를 변경해보자 (해결)

const result7 = ohgiraffers.find(function(item){
    return item.name === '조평훈';
})

if (result7) {
    result7.score = 85;
    console.log(result7.getInfo());
}

console.log("8. ========================================")
// 8. ohgiraffers 배열을 활용해서 조평훈 이라는 학생의
// 몸무게 정보를 추가해보자. weight -> 80 으로 추가 (해결)

const result8 = ohgiraffers.find(function(item){
    return item.name === '조평훈';
})

result8.weight = 80;

console.log(result8.getInfo8());

