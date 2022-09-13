window.addEventListener('scroll', ()=>{
    document.querySelector('.navbar').classList.toggle('window-scrolled', window.scrollY >0);
})


const nav = document.querySelector('.navbar-nav');
const openNavBtn = document.querySelector('#nav-toggle-open')
const closeNavBtn = document.querySelector('#nav-toggle-close')


const openNav= ()=>{
    nav.style.display = 'flex';
    openNavBtn.style.display= 'none';
    closeNavBtn.style.display= 'flex';
}
openNavBtn.addEventListener('click', openNav);

const closeNav= ()=>{
    nav.style.display = 'none';
    openNavBtn.style.display= 'flex';
    closeNavBtn.style.display= 'none';
}
closeNavBtn.addEventListener('click', closeNav);
