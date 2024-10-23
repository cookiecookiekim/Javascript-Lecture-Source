// 24-10-23 (수) 6교시, array method

/* Array가 가지고 있는 메서드 */

// 기준이 될 배열 생성
const foodList = [`싸이버거` , `냉면` , `물회` , `짜장면` , `물회`];

/*  indexOf : 배열의 요소가 위치하는 인덱스 리턴
    lastIndexOf : 배열의 요소가 위치한 마지막 인덱스 리턴
    includes : 배열에 해당 요소가 포함하는지 여부 리턴 */
console.log(`indexOf(인자) : ${foodList.indexOf(`물회`)}`);
// indexOf(인자) : 2 출력 (0번 , 1번 , 2번째 물회가 있으므로)
console.log(`indexOf(인자,3) : ${foodList.indexOf(`물회`,3)}`);
// indexOf(인자,3) : 4 출력 (3번째 짜장면을 기준으로 물회는 4번째에 있다)
console.log(`indexOf(존재하지 않는 요소) : ${foodList.indexOf(`삼겹살`)}`);
// indexOf(존재하지 않는 요소) : -1 출력

console.log(`includes(인자) : ${foodList.includes('물회')}`); // true
console.log(`includes(없는 요소) : ${foodList.includes('삼겹살')}`); // false
// true나 false와 같이 명확히 출력되므로, 조건문 만들기에 유리하다.

// 기준 배열
const chineseFood = [`짜장` , `짬뽕` , `탕수육`];
// push, pop 전 챕터에서 다루었기 때문에 pass 
// unshift : 배열의 맨 앞에 요소 추가
// shift : 배열의 맨 앞 요소 제거 후 반환
console.log(`변경 전 중국음식 : ${chineseFood}`);
// 변경 전 중국음식 : 짜장,짬뽕,탕수육
chineseFood.unshift(`팔보채`);
chineseFood.unshift(`동파육`);

console.log(`변경 후 중국음식 : ${chineseFood}`);
// 변경 후 중국음식 : 동파육,팔보채,짜장,짬뽕,탕수육

chineseFood.shift();
console.log(`shift 후 중국음식 : ${chineseFood}`);
// shift 후 중국음식 : 팔보채,짜장,짬뽕,탕수육

// 두 개 이상의 배열을 결합해보기
const idol= [`비투비`, `아이브`, `블랙핑크`];
const idol2= [`소녀시대`, `원더걸스`, `샤이니`];
const idol3= [`뉴진스`, `BTS`, `세븐틴`, `빅뱅`];

// concat(배열명1 , 배열명2, ...)
const mix = idol.concat(idol2);
console.log(mix);
// [ '비투비', '아이브', '블랙핑크', '소녀시대', '원더걸스', '샤이니' ]
const mix2 = idol3.concat(idol , idol2);
console.log(mix2); // idol3 → idol → idol2 순으로 출력

// slice : 배열의 요소 선택 잘라내기
// splice : 배열의 index 위치의 요소 제거 및 추가
const backend = [`java` , `spring` , `servlet`, `mybatis`];

console.log(`slice(1,3) : ${backend.slice(1,3)}`);
// slice(1,3) : spring,servlet ( 뭔..)
// 잘라 반환해주는 것이지, 요소를 삭제하는 것은 아니다.
console.log(backend); 
// [ 'java', 'spring', 'servlet', 'mybatis' ] 

console.log(`splice(3,1,'jdbc') : ${backend.splice(3,1,'jdbc')}`);
// splice(3,1,'jdbc') : mybatis
// (index , 제거수, 추가값1, 추가값2, ...)
console.log(backend); 
// [ 'java', 'spring', 'servlet', 'jdbc' ]
// mybatis가 jdbc로 변경

// 배열의 순서 뒤집기 revers()
console.log(`revers() : ${[1,2,3,4,5].reverse()}`);
// revers() : 5,4,3,2,1 출력 
