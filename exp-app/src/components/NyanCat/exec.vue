<template>
    <img src="./assets/nyanCat.gif" class="cat" ref="nyanCat">
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

            cat = this.$refs["nyanCat"];
            fi =  +cat.style.top;

            //AutoUpdate
            autoUpdate = setInterval(GameUpdate, Period)
        })
    },
    unmounted ()
    {
        clearInterval(autoUpdate);
    }
}

let cat;
let A = 40
let omega = 0.01;
let fi;

function periodicMovement(t)
{
    return A*Math.cos(omega*t + fi);    
}

//Experience AutoUpdater
let Period = 16;
let autoUpdate;
//let screen = window.getComputedStyle(document.querySelector('.screen'))
function GameUpdate()
{
    cat.style.top = periodicMovement(Date.now()) + "px";
}
//
</script>

<style scoped>
.cat
{
    position: relative;
    width: 5vw;
    height: 5vw;
}
</style>