// 24-10-22 (화) 3교시 이어서, in을 이용한 반복문

/* for in 반복문
    객체의 모든 키를 순회할 수 있다. */

var panda = {
     name : '푸바오'
    ,age : 4
    ,getInfo : function(){
        return `${this.name}는 ${this.age}살 입니다.`
    }
};

for(var key in panda) { // 담을 변수 설정 : key
    console.log(`key = ${key}`); // key = name  key = age  key = getInfor 출력
}
for(var value in panda) {
    console.log(`panda[key] = ${panda[key]}`); // key에 해당하는 value
} /* panda[key] = function(){
    return `${this.name}는 ${this.age}살 입니다.`
}  출력 */