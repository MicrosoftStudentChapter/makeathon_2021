let width = screen.width;
const smallDiv = document.querySelector('.small-prizes');
const fullDiv = document.querySelector('.bouncing-box-prizes');
smallDiv.classList.add('d-none');
fullDiv.classList.remove('d-none');
if(width<1024){
    smallDiv.classList.remove('d-none');
    fullDiv.classList.add('d-none');
}else{
    smallDiv.classList.add('d-none');
    fullDiv.classList.remove('d-none');
}
window.addEventListener('orientationchange',()=>{
    width = screen.width;
    console.log(width); 
    if(width<1024){
        smallDiv.classList.remove('d-none');
        fullDiv.classList.add('d-none');
    }
    else{
        smallDiv.classList.add('d-none');
        fullDiv.classList.remove('d-none');
    }
})