const btnToggle = document.getElementById('toggler');
const navMenu = document.querySelector('.navbar-item');
const navMenuItems = document.querySelectorAll('.item');
const navbar = document.querySelector('.header')


window.addEventListener('scroll' , ()=>{
    if (window.scrollY>=50) {
        navbar.classList.add('show-nav')
    }else{
        navbar.classList.remove('show-nav')
    }
})

const toggle = () => {
    navMenu.classList.toggle('show')
}

btnToggle.addEventListener('click' , ()=>{
    toggle();
})

navMenuItems.forEach((item) =>{
    item.addEventListener('click' , ()=> toggle() )
})

