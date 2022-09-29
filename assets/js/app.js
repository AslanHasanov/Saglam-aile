

var az=document.querySelector('.az')
var ru=document.querySelector('.ru')
var l=document.querySelector('.language')
var ic=document.querySelector('.ic')

l.addEventListener('mouseover',function(){
    ru.classList.remove('d-none')
    ic.classList.remove('fa-solid fa-chevron-down')
    ic.classList.add("fa-solid fa-chevron-up")
})
l.addEventListener('mouseout',function(){
    ru.classList.add('d-none')
})