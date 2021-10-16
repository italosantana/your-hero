const drinktime = prompt('Digite o seu tempo');
let drinkSeconds = drinktime * 60;
const drinkOutput = document.querySelector('.drink');

const countDown = () => {
    drinkOutput.innerHTML = drinktime
    const minutes = Math.floor(drinkSeconds / 60)
    const seconds = drinkSeconds % 60
    drinkSeconds --
    if(drinkSeconds > - 1){
        drinkOutput.innerHTML = `${minutes > 9 ? minutes: `0${minutes}`} : ${seconds > 9 ? seconds : `0${seconds}`}`
    }

    if(drinkSeconds <= - 1){
        drinkOutput.innerHTML =  "Time Over!"
    }
}

setInterval(countDown, 1000)