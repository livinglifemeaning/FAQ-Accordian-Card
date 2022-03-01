const arrows = document.querySelectorAll('.arrow'); 


arrows.forEach( arrow => {
arrow.addEventListener('click', () =>{
    let parent = arrow.parentElement; 
    parent.parentElement.classList.toggle('active'); 
})
})

function removeClasses(){ 
    arrows.forEach( arrow => {
    let parent = arrow.parentElement; 
    parent.parentElement.classList.remove('active')
    })
}