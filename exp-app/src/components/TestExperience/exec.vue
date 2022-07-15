
<template>
   <div class="quadra">
        <img src="./assets/basketball.png" class="ball" ref="playBall" @mousedown.left="StartDrag">
    </div>
</template>


<script>

export default {
    name:"CompExec",
    props:
    {
        active:
        {
            type: Boolean,
            default: false
        }
    },
    methods:
    {
        StartDrag(event)
        {
            event.preventDefault();
            if(dragging)
            {
                return;
            }
            oldMouseX = event.clientX;
            oldMouseY = event.clientY;
            dragging=true;
            document.onmousemove = Drag;
            document.onmouseup = () =>
            {
                dragging = false;
                document.onmouseup = null;
                document.onmousemove = null;
            }
        },
    },
    mounted ()
    {
        this.$nextTick(()=> {
            //Define Ref To Elements
            ball = this.$refs["playBall"];
            screen = window.getComputedStyle(document.querySelector('.quadra'))
            //AutoUpdate
            autoUpdate = setInterval(GameUpdate, Period)
        })
    },
    unmounted ()
    {
        clearInterval(autoUpdate);
    }
}

//Elements
let ball;
let x = 0;
let y = 0;
let oldX;
let oldY;
let velX = -20;
let velY = 0;
let dragging = false;
let screen;
function Physics()
{
    if(y + ball.height < screen.height.slice(0, -2))
    {
        velY += 2;
    }
    else if(Math.abs(velY) < 0.000002)
    {
        velY =0;
    }
    else
    {
        velY = -velY + 0.25*velY;
    }

    if(x - ball.width/2 < -screen.width.slice(0, -2)/2)
    {
        velX = -velX + 0.25*velX;
    }
    else if(x + ball.width/2 > screen.width.slice(0, -2)/2)
    {
        velX = -velX + 0.25*velX;
    }
    else
    {
        velX = velX*0.99;
        if(Math.abs(velX)<0.000002)
        {
            velX=0;
        }
    }
    x += velX;
    y += velY;
    oldX = x;
    oldY = y;
}
let oldMouseX = 0;
let oldMouseY = 0;
function Drag(e)
{
    e = e || window.event;
    e.preventDefault();
    velX = -oldX + x;
    velY = -oldY + y;
    oldX = x;
    oldY = y;

    x += -(oldMouseX - e.clientX);
    y += -(oldMouseY - e.clientY);
    oldMouseX = e.clientX;
    oldMouseY = e.clientY;

}
//Experience AutoUpdater
let Period = 16;
let autoUpdate;
function GameUpdate()
{
    if(!dragging)
    {
        Physics();
    }
    ball.style.top = y + "px";
    ball.style.left = x + "px";
}
//
</script>

<style scoped>
.ball
{
    position: relative;
    width: 10vw;
    height: 10vw;
}

.quadra
{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
</style>