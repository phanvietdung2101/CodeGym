let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
const RECT_SIZE = 5;
const RECT_POS = 1;
const DEFAULT_hSpeed = 1;
const DEFAULT_vSpeed = 1;
const DEFAULT_BALL_POS_X = 30;
const DEFAULT_BALL_POS_Y = 20;
const DEFAULT_BAR_POS_X = 500;
const DEFAULT_BAR_POS_Y = 500;
const DEFAULT_BAR_WIDTH = 75;
const DEFAULT_BAR_HEIGHT = 10;



let GameBoard = function(width,height){
    this.width = width;
    this.height = height
};

let Ball = function(target) {
    this.x = DEFAULT_BALL_POS_X;
    this.y = DEFAULT_BALL_POS_Y;

    this.hSpeed = DEFAULT_hSpeed;
    this.vSpeed = DEFAULT_vSpeed;
    this.radius = 10;

    this.pos = [this.x,this.y];
    this.speed = Math.sqrt(this.hSpeed * this.hSpeed + this.vSpeed * this.vSpeed);

    this.target = target;
    this.point = 0;

    this.showPoint  = function () {
        document.getElementById("point").innerHTML = "Point: "+ this.point;
    };

    this.showBallOnCanvas = function () {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
    };

    this.clearLastPos = function () {
        ctx.clearRect(this.x - this.hSpeed - this.radius - RECT_POS, this.y - this.vSpeed - this.radius - RECT_POS,2 * this.radius + RECT_SIZE, 2 * this.radius + RECT_SIZE);
    };

    this.movingBall = function () {
        this.x += this.hSpeed;
        this.y += this.vSpeed;
        this.whenBounce();
    };

    this.checkBouncingPos = function () {
        if(this.x <= 0 && this.y <= 0){
            return "Connor"  //"UpperLeftConnor"
        } else if(this.x <= 0 && this.y >= canvas.height){
            return "Connor" //"DownLeftConnor"
        } else if(this.x >= canvas.width && this.y <= 0){
            return "Connor"   //"UpperRightConnor"
        } else if(this.x >= canvas.width && this.y >= canvas.height){
            return "Connor"  // "DownRightConnor"
        } else if(this.x <= 0){
            return "Left"
        } else if(this.x >= canvas.width){
            return "Right"
        } else if(this.y <= 0){
            return "Upper"
        } else if(this.y >= canvas.height){
            return "Down"
        } else if(this.y >= this.target.y && this.x <= target.x + target.width && this.x >= target.x ){
            return "BounceTarget"
        }
    };

    this.whenBounce = function () {
        if(this.checkBouncingPos() == "Connor"){
            let temp = this.hSpeed;
            this.hSpeed = -this.vSpeed;
            this.vSpeed = -temp;
        } else if(this.checkBouncingPos() == "Left" || this.checkBouncingPos() == "Right"){
            this.hSpeed = -this.hSpeed;
        } else if(this.checkBouncingPos() == "Upper"){
            this.vSpeed = -this.vSpeed;
        } else if(this.checkBouncingPos() == "Down"){
            this.gameOver();
        } else if( this.checkBouncingPos() == "BounceTarget") {
            this.gotPoint();
            this.vSpeed = - this.vSpeed;
        }
    };

    this.gotPoint = function () {
        this.point++;
        this.showPoint();
    };

    this.gameOver = function () {
        endgame();
    }

};

let Bar = function() {
    let thisToBar = this;
    this.x = DEFAULT_BAR_POS_X;
    this.y = DEFAULT_BAR_POS_Y;
    this.width = DEFAULT_BAR_WIDTH;
    this.height = DEFAULT_BAR_HEIGHT;
    this.speed = 15;

    this.moveRight = function() {
        this.x += this.speed;
    };
    this.moveLeft = function () {
        this.x -= this.speed;
    };

    this.showBar = function () {
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fill();
        ctx.stroke();
    };

    this.clearLastPos = function () {
        ctx.clearRect(this.x - this.speed, this.y, this.width + 1, this.height + 1)
    };

    this.moveOnClick = function (event) {
        switch (event.keyCode) {
            case 37:
                thisToBar.moveLeft();
                thisToBar.clearLastPos();
                thisToBar.showBar();
                break;
            case 39:
                thisToBar.moveRight();
                thisToBar.clearLastPos();
                thisToBar.showBar();
                break;
        }
    }


};

function main() {
    let bar = new Bar();
    let ball = new Ball(bar);
    ball.showBallOnCanvas();
    ball.clearLastPos();

    bar.showBar();
    window.addEventListener("keydown",bar.moveOnClick);


    let loop = setInterval(function(){
        clearAllCanvas();
        ball.movingBall();
        ball.showBallOnCanvas();
        bar.showBar();
    },10);

    function endgame() {
        clearInterval(loop);
        alert("GameOver");
        window.location.reload();
    }


};

function clearAllCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

main();