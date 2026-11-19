


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var fps = 1000/60;
var timer = setInterval(game, fps);
var image = document.getElementById("player");
var player = {image: image, x: 1, y: 1};
var moveSpeed = 3;
var random = 0;
var decision = 0;
var maxBullets = 10;
var bullets =[];

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

    //draw the pictures
    ctx.drawImage(image, player.x, player.y, 25, 25);
    starPosDecider();
    spawnBullet();
}

function spawnBullet(){
    ctx.beginPath();
    ctx.fillStyle = "red";
        if(decision = 1){
            ctx.arc(0, Math.random()*canvas.height, 15, 0, 2 * Math.PI);
        }
        if(decision = 2){
            ctx.arc(canvas.width, Math.random()*canvas.height, 15, 0, 2 * Math.PI);
        }
        if(decision = 3){
            ctx.arc(Math.random()*canvas.width, canvas.height, 15, 0, 2 * Math.PI);
        }
        if(decision = 4){
            ctx.arc(Math.random()*canvas.width, 0, 15, 0, 2 * Math.PI);
        }
    ctx.closePath();
    ctx.fill();   
}

function starPosDecider(){
    var rand = Math.random();
    console.log(decision, rand)
    if(rand>=0 && rand<=0.25){
        decision = 1
        console.log("1")
        return
    }
    if(rand>0.25 && rand<=0.5){
        decision = 2
        console.log("2")
        return
    }
    if(rand>0.5 && rand<=0.75){
        decision = 3
        console.log("3")
        return
    }
    if(rand>0.75 && rand<=1){
        decision = 4
        console.log("4")
        return
    }
}