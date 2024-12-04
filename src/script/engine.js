const pianoKeys = document.querySelectorAll (".pianoKeys .key")
const volume = document.querySelector (".volumeSlider input")
const check = document.querySelector(".keysCheck input")
let audio = new Audio ("src/tunes/a.wav")
let mapedKeys = []


//toca som//
const playtune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play()

    const clickedKey = document.querySelector (`[data-key="${key}"]`)
    
    clickedKey.classList.add('active')
    setTimeout (() => {
        clickedKey.classList.remove ('active')
    },150)

    console.log (mapedKeys)
}


//Mapear Teclas//
pianoKeys.forEach((key) => {
    console.log(key.dataset.key)
    key.addEventListener('click', () => playtune(key.dataset.key))
    mapedKeys.push(key.dataset.key)
    
});

document.addEventListener ('keydown',
    (e) => {
   if (mapedKeys.includes(e.key)) {
    playtune(e.key)
}
}) 

//volume//
const handledVolume = (e) => {
    audio.volume = e.target.value
}

volume.addEventListener("input", handledVolume)


const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}
check.addEventListener ("click", showHideKeys)