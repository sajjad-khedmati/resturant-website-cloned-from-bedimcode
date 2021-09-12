const btnToggle = document.getElementById('toggler');
const navMenu = document.querySelector('.navbar-item');
const navMenuItems = document.querySelectorAll('.item');


const toggle = () => {
    navMenu.classList.toggle('show')
}

btnToggle.addEventListener('click' , ()=>{
    toggle();
})

navMenuItems.forEach((item) =>{
    item.addEventListener('click' , ()=> toggle() )
})

