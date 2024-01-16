// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
const boton = document.querySelector('#btnToClick')
boton.addEventListener('click', (e) => console.log(e))
// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
// const foc = document.querySelector('.focus')
// foc.addEventListener('focus', (e) => console.log(e.target.value))
const foc = document.querySelector('.focus')
foc.addEventListener('focus', (e) => console.log(e.target.value))
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const valu = document.querySelector('.value')
valu.addEventListener('input', (e) => console.log(e.target.value))