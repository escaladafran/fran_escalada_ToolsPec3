const splash = document.querySelector(".splash");
const btn = document.querySelector(".splash__title");
/** este codigo es por si queremos que haga la transicion automaticamente
con un timeout */ document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add("hide");
    }, 10000);
}) // btn.addEventListener('click',()=>{
 //     splash.classList.add('hide')
 //   })
;

//# sourceMappingURL=index.384d889b.js.map
