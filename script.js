var menuItens = document.querySelectorAll('.item-menu');

function selectLink(){
    menuItens.array.forEach((item) => {
        item.classList.remove('ativo')
    })
    this.classList.add('ativo')
}

menuItens.forEach((item) => {
    item.addEventListener('click', selectLink)
})

//expandir o menu
var btnExp = document.querySelector('#btn-exp')
var menuSite = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function() {
    menuSite.classList.toggle('expandir')
})