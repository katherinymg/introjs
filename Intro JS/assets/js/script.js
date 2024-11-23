const precio = 400000
let cantidad=Number(1)

const precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio

const btnA=document.querySelector(".aumentar")
const btnTexto=document.querySelector(".cantidad")
function action() {
    cantidad++ 
    btnTexto.innerHTML= cantidad   
  };

btnA.addEventListener("click", action);

const btnD=document.querySelector(".disminuir")
function action2() {
    cantidad-- 
    btnTexto.innerHTML= cantidad   
  };

btnD.addEventListener("click", action2);

const valorSpan = document.querySelector (".valor-total")

btnA.addEventListener('click', () => {
cantidad.innerHTML++
valorSpan.innerHTML = (precioSpan.innerHTML * btnTexto.innerHTML)
})



