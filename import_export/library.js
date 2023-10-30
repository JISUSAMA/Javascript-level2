var a =10;
var b = 20;
var d =50;
//export default 내보낼거
//a를 기본으로 사용하겠다라는 의미를 가진다
// export default a;

//export defalt는 한번만 사용이 가능하다 
//여러개를 사용하고싶은 경우, export{내보낼것들} 이런식으로 작성해주어야함
//1번째
export{a,b};
//2번째
// export{a};
// export{b};
//3번째
export var c =30; 
export default d; //동시사용가능