const content = document.querySelectorAll('.content')
const petitRond = document.querySelectorAll('.petit-rond')
let data = 0;

petitRond.forEach(item => {

    item.addEventListener('click', () => {

        if (item.classList.contains('active')){
            return;
        } else{
            item.classList.add('active')
        }

       data = item.getAttribute('data-anim');
       
       for (let i = 0; i < petitRond.length; i++){
            if (petitRond[i].getAttribute('data-anim') != data){
                petitRond[i].classList.remove('active')
            }
       }

       for (let k = 0; k < content.length; k++) {
           if (content[k].getAttribute('data-anim') === data){
               content[k].classList.add('active')
           } else {
               content[k].classList.remove('active')
           }
       }

    })

}) 
