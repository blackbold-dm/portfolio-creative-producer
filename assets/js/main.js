/*============ MENU SHOW Y HIDDEN ==========*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')


/*============ MENU SHOW ==========*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*============ MENU HIDDEN ==========*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* =================== PROJECTS SWIPER =================== */
let swiperPortfolio = document.querySelector('.projects__container .swiper-wrapper') && new Swiper(".projects__container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*============ ACCORDION SKILLS ==========*/
const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open '
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*============ QUALIFICATION TABS ==========*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents =>{
            tabContents.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*============ SERVICES ==========*/
const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*============ TESTIMONIAL SWIPER ==========*/
let swiperTestimonial = document.querySelector('.testimonial__container .swiper-wrapper') && new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            { const _l = document.querySelector('.nav__menu a[href*=' + sectionId + ']'); if(_l) _l.classList.add('active-link') }
        }else{
            { const _l = document.querySelector('.nav__menu a[href*=' + sectionId + ']'); if(_l) _l.classList.remove('active-link') }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});

/* =================== LIQUID GLASS JS =================== */

/* 1. Cursor glow theo chuột */
;(function () {
    const glow = document.createElement('div')
    glow.className = 'lg-cursor-glow'
    document.body.appendChild(glow)

    let tx = window.innerWidth / 2, ty = window.innerHeight / 2
    let cx = tx, cy = ty

    document.addEventListener('mousemove', e => {
        tx = e.clientX
        ty = e.clientY
    })

    ;(function animate() {
        cx += (tx - cx) * 0.10
        cy += (ty - cy) * 0.10
        glow.style.left = cx + 'px'
        glow.style.top  = cy + 'px'
        requestAnimationFrame(animate)
    })()
})()

/* 2. Button ripple theo vị trí chuột */
document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect()
        const x = ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%'
        const y = ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%'
        btn.style.setProperty('--mx', x)
        btn.style.setProperty('--my', y)
    })
})

/* 3. Staggered entrance cho cards khi scroll tới */
;(function () {
    if (!('IntersectionObserver' in window)) return

    const cards = document.querySelectorAll(
        '.skills__content, .services__content, .about__info > div'
    )

    cards.forEach((el, i) => {
        el.style.opacity   = '0'
        el.style.transform = 'translateY(24px)'
        el.style.transition =
            `opacity 0.45s ease ${i * 0.07}s, transform 0.45s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.07}s`
    })

    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity   = '1'
                entry.target.style.transform = 'translateY(0)'
                io.unobserve(entry.target)
            }
        })
    }, { threshold: 0.12 })

    cards.forEach(el => io.observe(el))
})()
