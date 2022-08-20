/* ==================================== Skills Animation =====================================*/
const skillsContent = document.getElementsByClassName('skills__content'), skillsHeader = document.querySelectorAll('.skills__header')


function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
})

/* ==================================== typing Animation =====================================*/
var tyoed = new Typed(".typing", {
    strings:["","Software Developer", "Web Developer", "UI Designer", "Electrical Engineer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})