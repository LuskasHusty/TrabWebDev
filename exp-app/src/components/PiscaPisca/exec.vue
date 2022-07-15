<template>
  <div class="quadra">
    <div class="box" ref="box" >

    </div>
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
    },
    mounted ()
    {
        this.$nextTick(()=> {
            //Define Ref To Elements
            box = this.$refs["box"];
            quadra = document.querySelector('.quadra');
            screen = window.getComputedStyle(quadra)

            box.onclick = () => {
              let r = Math.random()*255;
              let g = Math.random()*255;
              let b = Math.random()*255;
              box.style.backgroundColor = `rgb(${r},${g},${b})`;
              box.style.boxShadow = "0 0 35px "+`rgb(${r},${g},${b})`
            }; 
            

            //AutoUpdate
            autoUpdate = setInterval(GameUpdate, Period)
        })
    },
    unmounted ()
    {
      box.onclick = null;
      clearInterval(autoUpdate);
    }
}

let box;
let x = 0;
let y = 0;
let velX = 8;
let velY = 9;
let quadra;
let screen;
function Physics()
{

  if(x + 50 > screen.width.slice(0, -2)/2)
  {
    velX = -velX;
    setFundao();
  }
  else if(x - 50 < -screen.width.slice(0, -2)/2)
  {
    velX = -velX;
    setFundao();
  }

  if(y - 50 < -screen.height.slice(0, -2)/2)
  {
    velY = -velY;
    setFundao();
  }
  else if(y + 50 > screen.height.slice(0, -2)/2)
  {
    velY = -velY;
    setFundao();
  }
  x += velX;
  y += velY;

  box.style.top = y + "px";
  box.style.left = x + "px";
}

//Experience AutoUpdater
let Period = 16;
let autoUpdate;
//let screen = window.getComputedStyle(document.querySelector('.screen'))
function GameUpdate()
{
  Physics()
}

function setFundao()
{
  let r = Math.random()*255;
  let g = Math.random()*255;
  let b = Math.random()*255;
  quadra.style.backgroundColor = `rgb(${r},${g},${b})`
}
//
</script>

<style scoped>
  .box{
    position: relative;
    height: 100px;
    width: 100px;
    background-color: crimson;
    box-shadow: 0 0 35px crimson;
    border-radius: 15px;
    cursor: pointer;
  }
  .quadra
  {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
</style>