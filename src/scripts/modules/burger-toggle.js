const burgetButton = document.querySelector('.header__burger-button');
const userNavbar = document.querySelector('.user-navbar');

export default function burgerToggle () {
    if (burgetButton && userNavbar) {
        userNavbar.classList.remove('user-navbar--no-js');
        burgetButton.classList.remove('header__burger-button--no-js');
        burgetButton.addEventListener('click', ()=> {
            if(burgetButton.classList.contains('header__burger-button--active')) {
                burgetButton.classList.remove('header__burger-button--active');
                userNavbar.classList.remove('user-navbar--active')
            } else {
                burgetButton.classList.add('header__burger-button--active');
                userNavbar.classList.add('user-navbar--active');
            }
        })
    }
}
