!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(function(){colorChange=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));o.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(colorChange)}))}();
//# sourceMappingURL=01-color-switcher.17bd69b3.js.map
