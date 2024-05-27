//бургер
const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

burger.addEventListener('click', function(){
    nav.classList.toggle('nav--active')
    burger.classList.toggle('burger--active')
    document.body.classList.toggle('stop-scroll')
})


// модал окно
const callFormBtn = document.getElementById('call-form')
const  modalCallForm= document.getElementById('modal-call-form')

// открытие окна
callFormBtn.addEventListener('click', function(){
    modalCallForm.classList.add('modal-parent--open')
})

// закрытие окна
modalCallForm.querySelector('.modal').addEventListener('click', function(event){
    event._isClick = true
})
modalCallForm.addEventListener('click', function(event){
    if (event._isClick === true) return
    modalCallForm.classList.remove('modal-parent--open')
})

// закрытие с клавы
window.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
        modalCallForm.classList.remove('modal-parent--open')
    }
})

// слайдер
const swiper = new Swiper("#gallery", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        prevEl: "#gallery-prev",
        nextEl: "#gallery-next"
    }
})

// табы

const tabsBtn = document.querySelectorAll('.tabs__nav-btn')
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)

        if (! currentBtn.classList.contains('active')){
            tabsBtn.forEach(function(item){
                item.classList.remove('active')
            })

            tabsItems.forEach(function(item){
                item.classList.remove('active')
            })

            currentBtn.classList.add('active')
            currentTab.classList.add('active')
        }
    })
})

document.querySelector('.tabs__nav-btn').click()



// аккордион
new Accordion('.accordion-container');

// фильтр по категориям
const btns = document.querySelectorAll('.buttonsf button')
const imgs = document.querySelectorAll('.imagesf img')

for(let i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click', filterImg)
}

function setActiveBtn(e) {
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked')
    })
    e.target.classList.add('btn-clicked')
}

function filterImg(e){
    setActiveBtn(e)
    imgs.forEach(img => {
        img.classList.remove('img-shrink')
        img.classList.add('img-expand')

        const imgType = parseInt(img.dataset.img)
        const btnType = parseInt(e.target.dataset.btn)

        if(imgType !== btnType){
            img.classList.remove('img-expand')
            img.classList.add('img-shrink')
        }
    })
}

btns[0].addEventListener('click', (e) =>{
    setActiveBtn(e)
    imgs.forEach(img => {
        img.classList.remove('img-shrink')
        img.classList.add('img-expanded')
    })
})
