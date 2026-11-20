


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var fps = 1000/60;
var timer = setInterval(game, fps);
var image = document.getElementById("player");
var player = {image: image, x: 1, y: 1};
var moveSpeed = 3;
var random = 0;
var decision = 0;
var bullets =[];
var bulletCooldown = 300;
var dist = 9999999;
player.x = canvas.width/2;
player.y = canvas.height/2;

var w = false;
var a = false;
var s = false;
var d = false;



function game(){
    //erases the screen
    ctx.clearRect(0,0,canvas.width,canvas.height); 

    //Any changes to numbers
    bulletCooldown = bulletCooldown + 1;

    if(w==true){
        player.y-=moveSpeed;
    }
    if(a==true){
        player.x-=moveSpeed;
    }
    if(s==true){
        player.y+=moveSpeed;
    }
    if(d==true){
        player.x+=moveSpeed;
    }


    //Any collision detection 
    for (var i = 0; i < bullets.length; i++) {
        dist = ((player.x - bullets[i].x) ** 2 + (player.y - bullets[i].y) ** 2) ** 0.5;
        if(dist < 12.5 + bullets[i].radius){
            clearInterval(timer);
            bullets.splice(i, bullets.length);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";
            ctx.font = "30px Arial";
            ctx.fillText("Game Over", canvas.width/2 - 75, canvas.height/2);
            player.x = 9999;
            player.y = 9999;
        }
    }
    //draw the pictures
    ctx.drawImage(image, player.x, player.y, 25, 25);
    if(bulletCooldown == 400){
        bulletCooldown = 0;
        spawnBullet();
    }

    for (var i = 0; i < bullets.length; i++) {
        bullets[i].drawCircle();
        bullets[i].x += bullets[i].moveX;
        bullets[i].y += bullets[i].moveY;
    }
}

//Create bullet object
function createBullet() {
    var bullet = {
        x: 0,
        y: 0,
        radius: 1,
        color: "red",
        moveX: 0,
        moveY: 0
    }
    return bullet;
}

//create bullet object
function createbullet() {
    var bullet = {
        x: 0,
        y: 0,
        radius: 0,
        color: "black",
        drawCircle: function () {
            ctx.beginPath()
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
        },
    }
    return bullet;
}


var bulletCount = 40;
var bullets = [];

//Creates an array
for (var i = 0; i < bulletCount; i++) {
    bullets[i] = createbullet();
    bullets[i].x = 10000;//Math.random() * canvas.width;
    bullets[i].y = 10000;//Math.random() * canvas.height;
    bullets[i].drawCircle();
    bullets[i].radius = 10;


}

//spawns bullets on the edges of the canvas
function spawnBullet() {
    for (var i = 0; i < bullets.length; i++) {
        var bullet = bullets[i];
        var rand = Math.random();
        if (rand >= 0 && rand <= 0.25) {
            bullet.x = 0;
            bullet.y = Math.random() * canvas.height;
            bullet.moveX = 2;
            bullet.moveY = 0;
        }
        if (rand > 0.25 && rand <= 0.5) {
            bullet.x = canvas.width;
            bullet.y = Math.random() * canvas.height;
            bullet.moveX = -2;
            bullet.moveY = 0;
        }
        if (rand > 0.5 && rand <= 0.75) {
            bullet.x = Math.random() * canvas.width;
            bullet.y = canvas.height;
            bullet.moveX = 0;
            bullet.moveY = -2;
        }
        if (rand > 0.75 && rand <= 1) {
            bullet.x = Math.random() * canvas.width;
            bullet.y = 0;
            bullet.moveX = 0;
            bullet.moveY = 2;
        }
        bullet.drawCircle();
    }
}







