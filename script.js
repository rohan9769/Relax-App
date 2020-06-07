const container = document.querySelector('.container');
const text = document.querySelector('#text');
const totalTime = 7500
const breatheTime  = (totalTime/5) * 2
const holdTime = totalTime/5

breatheAnimation()

function breatheAnimation(){
    text.innerHTML = 'Breathe In!';
    container.className = 'container grow'

    setTimeout(()=>{
        text.innerText = 'Hold your breath'

        setTimeout(()=>{
            text.innerText = 'Breathe out Slowly'
            container.className = 'container shrink'
        },holdTime)
    },breatheTime)
}

setInterval(breatheAnimation,totalTime)