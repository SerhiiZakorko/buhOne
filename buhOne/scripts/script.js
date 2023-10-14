import { banners } from "./data.js"

const bannerWrapper = document.querySelector('.banner-wrapper')

bannerWrapper.innerHTML += `${banners.map((banner, ind) => 
    `<div class='banner'>
    <div class='banner-content'>
        <h2>${banner.title}</h2>
        <button>${banner.buttonText}</button>
        <div class='navigation-wrapper'>


            <div class='position-wrapper'>
                <div class='round'></div>
                <div class='round'></div>
                <div class='round'></div>
                <div class='round'></div>
            </div>

            <div class='nav-buttons'>
            <button><img src='./imgs/prew.svg'</button>
            <button><img src='./imgs/next.svg'</button>
            </div>
        </div>
    </div>
        </div>`).join('')}`

       
       
        function cycle(){
        `<div class='position-wrapper'>`
        for(let i = 0; i <= banners.length; i ++){
            `<div class='round'></div>`
        }
        `</div>`
        }