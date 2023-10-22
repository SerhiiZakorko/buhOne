import { banners, ourServices, aboutAchievements, ourClients } from "./data.js"
import{ bannerWrapper2,
    positionWrapper1,
    servicesWrapper,
    servicesLeft,
    servicesRight,
    achievementsWrapper,
    clientsWrapper2,
    positionWrapper2,
    clientsLeft,
    clientsRight} from "./variables.js"

let slider_index = 0

export function renderBanner(){
    bannerWrapper2.innerHTML += `${banners.map((banner, ind) => 
        `<div class='banner'>
        <div class='banner-content'>
            <h2>${banner.title}</h2>
            <button>${banner.buttonText}</button>
        </div>
            </div>`).join('')}`
    for(let i = 0; i < banners.length; i++){
        positionWrapper1.innerHTML += `<div class='services-round' id='serv-round${i}'></div>`
    }
}

function goLeftBanner(){
    if(slider_index !==0){
        slider_index --
        bannerWrapper2.style.left = `${-1 * slider_index * 100}vw`
    }
    const curentRound = document.querySelector(`#serv-round${slider_index}`)
    const rounds = document.querySelectorAll('.services-round')
    rounds.forEach(round => round.style.opacity = '30%')
    curentRound.style.opacity = '100%'
}

function goRightBanner(){
    if(slider_index < banners.length - 1){
        slider_index ++
        bannerWrapper2.style.left = `${-1 * slider_index * 100}vw`
    }
    const curentRound = document.querySelector(`#serv-round${slider_index}`)
    const rounds = document.querySelectorAll('.services-round')
    rounds.forEach(round => round.style.opacity = '30%')
    curentRound.style.opacity = '100%'
}

export function renderServCards(){
    servicesWrapper.innerHTML = `${ourServices.map(serv => 
        `<div class='service-card'><h3>${serv}</h3></div>`).join('')}`
}

servicesRight.addEventListener('click', () => goRightBanner())
servicesLeft.addEventListener('click', () => goLeftBanner())

export function renderAchievements(){
    achievementsWrapper.innerHTML += 
    `${aboutAchievements.map(achievement => `<div class='achievement-card'>
    <h3>${achievement.count}</h3>
    <p>${achievement.title}</p>
    <a>${achievement.button}</a>
    </div>`).join('')}`
}

export function renderClients(){
    clientsWrapper2.innerHTML = `
    ${ourClients.map(client => 
        `<div class='client-banner'><img src="${client}" alt="our_clients"></div>`
        ).join('')}`
    for(let i = 0; i < ourClients.length; i++){
        positionWrapper2.innerHTML += `<div class='clients-round' id='cl-round${i}'></div>`
    }
}

function goRightClients(){
    if(slider_index < banners.length - 1){
        slider_index ++
        clientsWrapper2.style.left = `${-1 * slider_index * 60}vw`
    }
    const curentRound = document.querySelector(`#cl-round${slider_index}`)
    const rounds = document.querySelectorAll('.clients-round')
    rounds.forEach(round => round.style.opacity = '30%')
    curentRound.style.opacity = '100%'
}
function goLeftClients(){
    if(slider_index !==0){
        slider_index --
        clientsWrapper2.style.left = `${-1 * slider_index * 60}vw`
    }
    const curentRound = document.querySelector(`#cl-round${slider_index}`)
    const rounds = document.querySelectorAll('.clients-round')
    rounds.forEach(round => round.style.opacity = '30%')
    curentRound.style.opacity = '100%'
}

clientsRight.addEventListener('click', () => goRightClients())
clientsLeft.addEventListener('click', () => goLeftClients())