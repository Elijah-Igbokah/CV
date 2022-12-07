window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');


    for(var i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('activeWindow')
        }
        else{
            reveals[i].classList.remove('activeWindow');
        }
    }
}