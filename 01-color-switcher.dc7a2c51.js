const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");e.addEventListener("click",(()=>{colorChange=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=e}),1e3)})),t.addEventListener("click",(()=>{clearInterval(colorChange)}));
//# sourceMappingURL=01-color-switcher.dc7a2c51.js.map
