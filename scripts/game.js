const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var fps = 1000/60;
var timer = setInterval(game, fps);
var image = document.getElementById("player");
var player = {image: image, x: 1, y: 1};

player.x = canvas.width/2;
player.y = canvas.height/2;

function game()
{
    //erases the screen
    ctx.clearRect(0,0,canvas.width,canvas.height); 

    //Any changes to numbers

    //Any collision detection 

    //draw the pictures
    ctx.drawImage(image, player.x, player.y, 25, 25);
}