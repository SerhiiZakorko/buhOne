import { banners, ourServices, aboutAchievements, ourClients, reviews } from "./data.js"
import{ bannerWrapper2,
    bannerPositionWrapper,
    servicesWrapper,
    servicesLeft,
    servicesRight,
    achievementsWrapper,
    clientsWrapper2,
    clientsPositionWrapper,
    clientsLeft,
    clientsRight, 
    reviewsWrapper2,
    reviewsPositionWrapper,
    reviewsLeft,
    reviewsRight
 } from "./variables.js"

let slider_index = 0

//                                      Рендер баннера об услугах
export function renderBanner(){
    bannerWrapper2.innerHTML += `${banners.map((banner) => 
        `<div class='banner'>
        <div class='banner-content'>
            <h2>${banner.title}</h2>
            <button>${banner.buttonText}</button>
        </div>
            </div>`).join('')}`
    for(let i = 0; i < banners.length; i++){
        bannerPositionWrapper.innerHTML += `<div class='servicesRound' id='servRound${i}'></div>`
    }
}

servicesRight.addEventListener('click', () => goRight(bannerWrapper2, 100))
servicesLeft.addEventListener('click', () => goLeft(bannerWrapper2, 100))


//                                       Рендер Наши услуги
export function renderServCards(){
    servicesWrapper.innerHTML = `${ourServices.map(serv => 
        `<div class='service-card'><h3>${serv}</h3></div>`).join('')}`
}


//                                      Рендер Наши достижения
export function renderAchievements(){
    achievementsWrapper.innerHTML += 
    `${aboutAchievements.map(achievement => `<div class='achievement-card'>
    <h3>${achievement.count}</h3>
    <p>${achievement.title}</p>
    <a>${achievement.button}</a>
    </div>`).join('')}`
}


//                                     Рендер С нами работают
export function renderClients(){
    clientsWrapper2.innerHTML = `
    ${ourClients.map(client => 
        `<div class='client-banner'><img src="${client}" alt="our_clients"></div>`
        ).join('')}`
    for(let i = 0; i < ourClients.length; i++){
        clientsPositionWrapper.innerHTML += `<div class='clientsRound' id='clRound${i}'></div>`
    }
}

clientsRight.addEventListener('click', () => goRight(clientsWrapper2, 60))
clientsLeft.addEventListener('click', () => goLeft(clientsWrapper2, 60))


//                                     Рендер Отзывы
export function renderReviews(){
    reviewsWrapper2.innerHTML = `
    ${reviews.map(review => 
        `<div class='review-banner'>
            <p>${review.text}</p>
            <div class='review-author'>
                <img src=${review.avatar} alt="avatar">
                <div class='review-author-descr'>
                    <h4>${review.name}</h4>
                    <h5>${review.role}</h5>
                </div>
            </div>
        </div>`
        ).join('')}`
        for(let i = 0; i < reviews.length; i++){
            reviewsPositionWrapper.innerHTML += `<div class='reviewsRound' id='reviewRound${i}'></div>`
        }
}
reviewsLeft.addEventListener('click', () => goLeft(reviewsWrapper2, 60))
reviewsRight.addEventListener('click', () => goRight(reviewsWrapper2, 60))


//                                     Функция Влево
function goLeft(target, shift){
    if(slider_index !==0){
        slider_index --
        target.style.left = `${-1 * slider_index * shift}vw`
    }
    const curentRound = document.querySelector(`#servRound${slider_index}`)
    const rounds = document.querySelectorAll(`.servicesRound`)
    rounds.forEach(round => round.style.opacity = '30%')
    curentRound.style.opacity = '100%'
}

//                                     Функция Вправо
function goRight(target, shift){
    if(slider_index < banners.length - 1){
        slider_index ++
        target.style.left = `${-1 * slider_index * shift}vw`
    }
    const curentRound = document.querySelector(`#servRound${slider_index}`)
    const rounds = document.querySelectorAll(`.servicesRound`)
    rounds.forEach(round => round.style.opacity = '30%')
    curentRound.style.opacity = '100%'
}


