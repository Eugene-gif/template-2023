import { closeMenu } from "@/modules/menu";
import { switchPage } from "@/modules/switchPage";
import { loadPage } from "@/modules/loadPage";
import { setupTheme } from "@/modules/setupTheme";

let links = document.querySelectorAll('.nav__item a');
let pages = document.querySelectorAll('._page');

for(let i = 0; i < links.length; i++) {
  switchPage(links[i], pages[i], closeMenu);
}

window.addEventListener('load', () => {
  loadPage(links, pages);
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 30)
});

setupTheme();


    // let currentLink = document.querySelector('.nav__item._active');
    // let hash = window.location.hash.slice(1);

    // mask.classList.add('hide');

    // for (let i = 0; i < links.length; i++) {
    //   let link = links[i].closest('.nav__item');
    //   let page = pages[i];

    //   if (hash === page.id) {
    //     page.classList.add('_show');
    //     currentLink.classList.remove('_active');
    //     link.classList.add('_active');
    //   }

    //   if (!hash) {
    //     hash = localStorage.getItem('page');
    //   }
    // }

    // setTimeout(() => {
    //   mask.remove();
    // }, 500);

    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 30)
    

// window.addEventListener('load', function() {
//   let currentLink = document.querySelector('.nav__item._active');
//   let hash = window.location.hash.slice(1);

//   mask.classList.add('hide');

//   for(let i = 0; i < links.length; i++) {
//     let link = links[i].closest('.nav__item');
//     let page = pages[i];

//     if(hash === page.id) {
//       page.classList.add('_show');
//       currentLink.classList.remove('_active');
//       link.classList.add('_active');
//     }

//     if(!hash) {
//       hash = localStorage.getItem('page');
//     }
//   }

//   setTimeout(() => {
//     mask.remove();
//   }, 500);
  
//   setTimeout(() => {
//     window.scrollTo(0, 0);
//   }, 30)
// })


// window.onload = function () {
//   let hash = window.location.hash.slice(1);
//   let currentLink = document.querySelector('.nav__item._active');

//   for(let i = 0; i < links.length; i++) {
//     let link = links[i].closest('.nav__item');
//     let page = pages[i];

//     if(hash === page.id) {
//       page.classList.add('_show');
//       currentLink.classList.remove('_active');
//       link.classList.add('_active');
//     }

//     if(!hash) {
//       hash = localStorage.getItem('page');
//     }
//   }

//   setTimeout(() => {
//     window.scrollTo(0, 0);
//   }, 30);
// }


  // pages.forEach((el) => {
    // if (window.location.hash === '#' + el.id) {
    //   const a = document.querySelector(`a[href*="${el.id}"]`);
    //   a.click();
    //   el.classList.add('_ACTIVE');
    //   console.log(el.id, a);
    // }
  // });


  // let title = document.head.querySelector('title');
  // title.innerText = window.location.hash.slice(1);
  // console.log(title)



// window.onload = function () {
  
//   setTimeout(() => {
//     window.scrollTo(0, 0);
//   }, 50);
// }
// console.log(links, pages);
// function switchPage(link, page) {
  
//   link.addEventListener('click', (el) => {
//     let activePage = document.querySelector('._show._page');
//     let activeLink = document.querySelector('.nav__item._active');
//     let currentLink = el.target.closest('.nav__item');

//     activePage.classList.remove('_show');
//     page.classList.add('_show');
//     localStorage.setItem('page', page.id);
//     activeLink.classList.remove('_active');
//     currentLink.classList.add('_active');
//     menu.close();
//     console.log(currentLink);
//   })
// }
// switcher.links.forEach(el => {
//   console.log(el);
// });

// import { setupResize } from "@/utils/resize";
// import { setupTheme } from "@/utils/theme";
// import { switchPages } from "@/utils/switchPages";
// import { setupGetProducts } from "@/modules/pages/Products/getProducts";
// setupResize();
// setupTheme();
// toggleMenu();
// const menuBtn = document.querySelector('.header__menu-btn input');
// menuBtn.addEventListener('click', () => {
//   console.log(menuBtn.cheked);
// })
// setupGetProducts();
// const header = document.querySelector('.header');
// const headerBtn = header.querySelector('.header__btn');
// const headerNav = header.querySelector(".header__nav");
// const overlay = header.querySelector('.header__overlay');
// const navBtns = header.querySelectorAll('.nav__btn._btn');
// const contents = document.querySelectorAll('._content');

// function toggleMenu() {
//   headerBtn.classList.toggle('_close');
//   headerNav.classList.toggle('_show');
//   overlay.classList.toggle('_show');
//   document.body.classList.toggle('_lock');
// }

// function toggleContent(dataset) {
//   let activeContent = document.querySelector('._content._show');

//   for(let content of contents) {
//     if(dataset === content.dataset.content) {
//       activeContent.classList.remove('_show');
//       content.classList.add('_show');
//       localStorage.setItem("page", dataset);
//       window.location.hash = dataset;
//     }
//   }
  
//   window.scrollTo(0, 0);
// }

// headerBtn.onclick = toggleMenu;
// overlay.onclick = toggleMenu;

// for (let btn of navBtns) {
//   btn.onclick = function () {
//     let activeBtn = header.querySelector('.nav__btn._active');
//     // activeBtn.classList.remove('_active');
//     btn.classList.add("_active");
//     localStorage.setItem("page", btn.dataset.btn);
//     toggleMenu();
//     toggleContent(btn.dataset.btn);
//   }
// }

// if(window.location.hash === '#home') {
//   localStorage.setItem("page", 'home');
//   console.log(123);
// }

// window.onload = function () {
//   switchPages();
  
//   setTimeout(() => {
//     window.scrollTo(0, 0);
//   }, 50);
// }

// window.onload = function () {
//   const sections = document.querySelectorAll('.section');
//   sections.forEach((el) => {
//     if (window.location.hash === '#' + el.id) {
//       const a = document.querySelector(`a[href*="${el.id}"]`);
//       a.click();
//       el.classList.add('_ACTIVE');
//       console.log(el.id, a);
//     }
//   });
// }