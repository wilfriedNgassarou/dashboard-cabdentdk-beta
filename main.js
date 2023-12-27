const menuBurger = document.querySelector('.burger-menu') ;

menuBurger.addEventListener('click', (e) => {
  e.target.closest('header').classList.toggle('header-closed') ;
})

const navList = document.querySelector('.header ul') ;

navList.addEventListener('click', (e) => {
  if(!e.target.closest('li')) return ;

  const li = e.target.closest('li');
  const currentActive = document.querySelector('.navlink-active');

  currentActive.classList.remove('navlink-active')
  li.classList.add('navlink-active')

})