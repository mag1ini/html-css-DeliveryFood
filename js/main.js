console.log('hello')

const modal = document.querySelector('#modal')
const cardBtn = document.querySelector('#card-button')

const close = document.querySelector('#close')
cardBtn.addEventListener('click', toggleModal)
close.addEventListener('click',toggleModal)
// close.addEventListener('click',(e)=>{
//     modal.classList.remove('is-open')
// })
// modal.classList.add('is-open')

function toggleModal()  {
    modal.classList.toggle('is-open')
}
console.log(cardBtn)



