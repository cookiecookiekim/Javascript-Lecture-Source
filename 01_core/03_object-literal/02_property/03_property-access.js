// 24-10-22 (화) 2교시 프로퍼티 이어서

/* 프로퍼티에 접근하는 방법
    1. 마침표 표기법(.)
    2. 대괄호 표기법([]) */

    var panda = {
        name : '푸바오' 
       ,eat : function(food){
           console.log(`${this.name}는 ${food}(을)를 맛있게 먹어요`)
       }
    };
   // 마침표 표기법 확인
   console.log(panda.name); // 푸바오 출력

   // 대괄호 표기법 확인 → 프로퍼티 키는 반드시 따옴표로 감싼 문자열 사용 
   console.log(panda['name']); // 푸바오 출력
   panda['eat']('죽순'); // 푸바오는 죽순(을)를 맛있게 먹어요 출력



   // 대괄호 표기법을 반드시 사용해야 하는 경우
   var obj = {
     'dash-key' : 'value'
    ,0 : 1
   };
// 프로퍼티의 키가 네이밍 규칙을 위반하는 경우, 마침표 표기법 사용 안 됨.
//    console.log(obj.dash-key); 마침표 표기법으로 불러올 때 에러 발생 (- 인식 불가)
   console.log(obj['dash-key']); // value 출력
   //console.log(obj[dash-key]); // 에러 발생
   // 대괄호 표기법은 ''로 key 값을 감싸자

   console.log(obj['0']); // 1 출력
   // 프로퍼티 키가 정수값으로 된 경우에는 '' 생략 가능
   console.log(obj[0]); // 1 출력

   