// 24-10-22 (화) 2교시 이어서, 프로퍼티 값을 수정 / 추가 / 삭제하기

var panda = {
     name : '푸바오'
};

// (수정) 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
panda.name = '아이바오';
console.log(panda); // { name: '아이바오' } 출력

// (추가) 프로퍼티 동적으로 추가하기
// 존재하지 않는 프로퍼티에 값을 할당하게 되면,
// 프로퍼티가 동적으로 생성되어 추가 된다.
panda.age = 7; // 존재하지 않은 age에 7을 넣기.
console.log(panda); // { name: '아이바오', age: 7 } 출력

// (삭제) 프로퍼티 삭제
// delete 연산자를 사용해서 삭제할 수 있다.
delete panda.age;
console.log(panda); // { name: '아이바오' } 출력

// 없는 프로퍼티 삭제해보기.
// 없는 프로퍼티는 삭제하려고 해도 에러 발생이 아닌 무시가 된다.
delete panda.eat; // eat은 있지도 않은 프로퍼티
console.log(panda); // { name: '아이바오' } 출력