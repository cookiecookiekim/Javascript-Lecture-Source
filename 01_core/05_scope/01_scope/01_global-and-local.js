// 24-10-23 (수) 1교시 전역 스코프와 지역 스코프 
//          (흐름 : 작은곳(지역) → 넓은 곳 (전역))

/* 전역 스코프와 지역 스코프 */

var x = `global x`; // 전역 변수
var y = `global y`; // 전역 변수
var z = `global z`; // 전역 변수

function outer (){
    var z = `outer local z`; // 지역 변수
    console.log(x);
    console.log(y);
    console.log(z);
    function inner () {
        var x = `inner local x`;
        console.log(x);
        console.log(y);
        console.log(z);
    };
    inner();
};

outer();
// console.log(z); z는 지역 변수이기 때문에 {} 외부에서 호출 시 에러 발생