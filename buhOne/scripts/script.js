import { banners } from "./data.js"

const bannerWrapper2 = document.querySelector('.banner-wrapper2')
const servicesRight = document.querySelector('#services-right')
const servicesLeft = document.querySelector('#services-left')
const positionWrapper = document.querySelector('.position-wrapper')
let slider_index = 0

renderBanner()

function renderBanner(){
    bannerWrapper2.innerHTML += `${banners.map((banner, ind) => 
        `<div class='banner'>
        <div class='banner-content'>
            <h2>${banner.title}</h2>
            <button>${banner.buttonText}</button>
        </div>
            </div>`).join('')}`

    for(let i = 0; i < banners.length; i++){
        positionWrapper.innerHTML += `<div class='round' id='round${i}'></div>`
    }
}


servicesRight.addEventListener('click', () => goRight())
servicesLeft.addEventListener('click', () => goLeft())

function goLeft(){
    if(slider_index !==0){
        slider_index --
        bannerWrapper2.style.left = `${-1 * slider_index * 100}%`
    }
    const curentRound = document.querySelector(`#round${slider_index}`)
    const rounds = document.querySelectorAll('.round')
    rounds.forEach(round => round.style.opacity = '40%')
    curentRound.style.opacity = '100%'
}

function goRight(){
    if(slider_index < banners.length - 1){
        slider_index ++
        bannerWrapper2.style.left = `${-1 * slider_index * 100}%`
    }
    const curentRound = document.querySelector(`#round${slider_index}`)
    const rounds = document.querySelectorAll('.round')
    rounds.forEach(round => round.style.opacity = '30%')
    curentRound.style.opacity = '100%'
}