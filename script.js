let modelContainer = document.querySelector('.model-container');
let closeBtn = document.querySelector('.close-btn');
let openBtn = document.querySelector('#open-btn')

openBtn.addEventListener('click',function(){
    modelContainer.style.display = 'block'
});

closeBtn.addEventListener('click',function(){
    modelContainer.style.display = 'none'
})

window.addEventListener('click',function(click){
    if(click.target === modelContainer){
        modelContainer.style.display = 'none'
    }
})