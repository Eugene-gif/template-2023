(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const a=document.querySelector(".header__menu-btn input"),d=document.querySelector(".overlay"),m=document.querySelector(".nav");function f(){d.classList.toggle("_show"),m.classList.toggle("_show"),document.body.classList.toggle("_lock")}function u(){a.checked=!1,d.classList.remove("_show"),m.classList.remove("_show"),document.body.classList.remove("_lock")}a.addEventListener("input",f);d.addEventListener("click",u);document.addEventListener("keyup",t=>{t.key==="Escape"&&a.checked&&u()});function v(t,s,l){t.addEventListener("click",n=>{let e=document.querySelector("._show._page"),o=document.querySelector(".nav__item._active"),c=n.target.closest(".nav__item");e.classList.remove("_show"),s.classList.add("_show"),o.classList.remove("_active"),c.classList.add("_active"),localStorage.setItem("page",s.id),setTimeout(()=>{window.scrollTo(0,0)},30),l()})}function _(t,s){let l=document.querySelector(".mask"),n=document.querySelector(".nav__item._active"),e=document.querySelector("._page._show"),o=window.location.hash.slice(1);l.classList.add("hide");for(let c=0;c<t.length;c++){let g=t[c].closest(".nav__item"),i=s[c];o===i.id?(e.classList.remove("_show"),i.classList.add("_show"),n.classList.remove("_active"),g.classList.add("_active"),localStorage.setItem("page",i.id)):o||(window.location.hash="#home",localStorage.setItem("page","home"))}setTimeout(()=>{l.remove()},500)}function L(){const t=document.querySelector(".theme-btn #toggle");t.checked=!0,t.addEventListener("input",s);function s(){t.checked?(console.log(t.checked,"Включена светлая тема, можно поменят на тёмную"),localStorage.setItem("theme","light"),document.body.classList.remove("dark")):(console.log(t.checked,"Включена темная тема, можно поменять на светлую"),localStorage.setItem("theme","dark"),document.body.classList.add("dark"))}}let r=document.querySelectorAll(".nav__item a"),h=document.querySelectorAll("._page");for(let t=0;t<r.length;t++)v(r[t],h[t],u);window.addEventListener("load",()=>{_(r,h),setTimeout(()=>{window.scrollTo(0,0)},30)});L();