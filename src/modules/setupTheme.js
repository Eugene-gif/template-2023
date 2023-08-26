export function setupTheme() {
  // const theme = {
  //   btn: document.querySelector("._theme-btn"),
  //   icon: {
  //     sun: "icons/sun.svg",
  //     moon: "icons/moon.svg",
  //   },
  //   currentTheme: localStorage.getItem("theme"),
  //   currentIcon: localStorage.getItem("icon"),
  //   action: () => {
  //     if (theme.currentTheme === "dark") {
  //       document.body.classList.add("dark");
  //       theme.btn.children[0].setAttribute("src", theme.icon.sun);
  //     } else {
  //       document.body.classList.remove("dark");
  //       theme.btn.children[0].setAttribute("src", theme.icon.moon);
  //     }

  //     theme.btn.addEventListener("click", function () {
  //       document.body.classList.toggle("dark");
  //       if (document.body.classList.contains("dark")) {
  //         theme.currentTheme = "dark";
  //         theme.btn.children[0].setAttribute("src", theme.icon.sun);
  //         console.log("Меняем тему на темную");
  //       } else {
  //         theme.currentTheme = "light";
  //         theme.btn.children[0].setAttribute("src", theme.icon.moon);
  //         console.log("Меняем тему на светлую");
  //       }

  //       localStorage.setItem("theme", theme.currentTheme);
  //     });
  //   }
  // }

  // theme.action();

  const switcher = document.querySelector('.theme-btn #toggle');
  switcher.checked = true;

  switcher.addEventListener('input', switchTheme)

  function switchTheme() {



    if (!switcher.checked) {
      console.log(switcher.checked, 'Включена темная тема, можно поменять на светлую');
      localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark');
    } else {
      console.log(switcher.checked, 'Включена светлая тема, можно поменят на тёмную');
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
    }
  }

  // let valueTheme = localStorage.getItem('theme');

  // if(valueTheme === 'dark') {
  //   console.log('DARKSiDE')
  // } else {
  //   console.log('light theme');
  // }
  // switcher.addEventListener('input', () => {
  //   console.log(switcher.checked);
  //   console.log(valueTheme);
  //   document.body.classList.add('dark');
  //   localStorage.setItem('theme', 'dark');
  // })



}