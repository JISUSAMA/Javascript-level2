var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dinoIMG = new Image();
dinoIMG.src = "dinosaur.png";
var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,

  draw() {
    // ctx.fillStyle = "green";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(dinoIMG, this.x, this.y, this.width, this.height);
  },
};
dino.draw();

class Cactus {
  constructor() {
    this.x = 350;
    this.y = 200;
    this.width = 20;
    this.height = 50;
  }
  draw() {
    // ctx.fillStyle = "red";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(CactusIMG, this.x, this.y, this.width, this.height);
  }
}

var CactusIMG = new Image();
CactusIMG.src = "cactus.png";

var timer = 0;
var cactusArr = [];
var animation;
function CactusMove() {
  animation = requestAnimationFrame(CactusMove); //코드를 1초에 60번 실행하기 위해서 사용하는 기능
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 250 == 0) {
    var cactus = new Cactus();
    cactusArr.push(cactus);
  }
  cactusArr.forEach((a, i, o) => {
    //선인장이 0보다 작아지면 배열에서 지우기
    if (a.x < 0) {
      o.splice(i, 1);
    }
    collisionCheck(dino, a);
    a.x--;
    a.draw();
  });

  if (jumping == true) {
    dino.y--;
    jumpT++;
    if (jumpT > 100) {
      jumping = false;
      jumpT = 0;
    }
  } else {
    if (dino.y != 200) dino.y++;
  }
  console.log(dino.y);
  dino.draw();
}
CactusMove();

//충돌확인
function collisionCheck(dino, cactus) {
  var disX = cactus.x - (dino.x + dino.width);
  var disY = cactus.y - (dino.y + dino.height);
  console.log("x1 :" + disX + "Y1 :" + disY);
  if (disX < 0 && disY < 0) {
    console.log("x :" + disX + "Y :" + disY);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

var jumpT = 0;
var jumping = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    jumping = true;
    dino.y += 1;
    if (e.y > 205) {
      jumping = false;
      dino.y -= 1;
    }
  }
});
