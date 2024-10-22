// 24-10-22 (화) 3교시, 메서드 단축 구문

var panda = {
    name : '푸바오'
   ,eat : function(food){
       console.log(`${this.name}는 ${food}(을)를 맛있게 먹어요`)
   }
};
panda.eat('대나무'); // 푸바오는 대나무(을)를 맛있게 먹어요 출력

var panda2 = {
    name : '푸바오'
   ,eat(food) { // function 지워도 출력 가능
       console.log(`${this.name}는 ${food}(을)를 맛있게 먹어요`);
   }
};
panda.eat('대나무'); // 푸바오는 대나무(을)를 맛있게 먹어요 출력