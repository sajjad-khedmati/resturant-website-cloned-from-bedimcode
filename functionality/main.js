const btnToggle = document.getElementById('toggler');
const navMenu = document.querySelector('.navbar-item');
const navMenuItems = document.querySelectorAll('.item');
const navbar = document.querySelector('.header');
const darkModeBtn = document.querySelector('.darkmode');


// show navbar when ckicked
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


// closed navbar when clicked on each nav items
navMenuItems.forEach((item) =>{
    item.addEventListener('click' , ()=> toggle() )
})


// active nav links when scrolling 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// dark mode 
darkModeBtn.addEventListener('click' , ()=>{
    document.body.classList.toggle('dark-theme');
})
