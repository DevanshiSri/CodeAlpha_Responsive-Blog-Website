burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')



burger.addEventListener('click',()=>{
    rightNav.classList.toggle('view-resp')
    navList.classList.toggle('view-resp')
    navbar.classList.toggle('navheight-resp')
})