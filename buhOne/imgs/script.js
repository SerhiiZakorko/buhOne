import {images} from './utils.js'
const root = document.querySelector('#root')
const frame = document.createElement('div')
const cards = document.createElement('div')
const triggers = document.createElement('div')
const left_btn =  document.createElement('button')
const right_btn = document.createElement('button')
let slider_index = 0

left_btn.innerText = '<'
right_btn.innerText = '>'
triggers.classList.add('trigger')
frame.classList.add('frame')
cards.classList.add('cards')
triggers.append(left_btn, right_btn)
frame.append(triggers, cards)
root.append(frame)

images.forEach((imageURL) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.style.backgroundImage = `url(${imageURL})`
    cards.append(card)
})

left_btn.addEventListener('click', () => go_left())
right_btn.addEventListener('click', () => go_right())

function go_left(){
    if(slider_index !==0){
        slider_index --
        cards.style.left = `${-1 * slider_index * 500}px`
    }
}

function go_right(){
    if(slider_index < images.length - 1){
        slider_index ++
        cards.style.left = `${-1 * slider_index * 500}px`
    }
}

function create_round(){
    const container = document.createElement('div')
    container.classList.add('rounds')
    images.forEach((_, ind) => {
        const button = document.createElement('button')
        container.append(button)

        button.addEventListener('click', () => {
            slider_index = ind
            cards.style.left = `${-1 * slider_index * 500}px`
            // const all_button = button.parentElement.children
            // all_button.forEach((btn) => {
            //     btn.classList.remove('active')
            // })
            button.classList.add('active')
        })
    })
    frame.append(container)
}

create_round()

HTMLAllCollection.prototype.forEachForMe = function (callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}