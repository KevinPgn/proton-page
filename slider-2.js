const content2 = document.querySelectorAll('.content-2')
const rond = document.querySelectorAll('.little-rond')
let num = 0;

rond.forEach(item => {

    item.addEventListener('click', () => {

        if (item.classList.contains('active')){
            return;
        } else {
            item.classList.add('active')
        }

        num = item.getAttribute('data-id')

        for (let i = 0; i < rond.length; i++) {
            if (rond[i].getAttribute('data-id') != num){
                rond[i].classList.remove('active')
            }
        }

        for (let j = 0; j < content2.length; j++) {
            if (content2[j].getAttribute('data-id') == num){
                content2[j].classList.add('active-contenu')
            } else {
                content2[j].classList.remove('active-contenu')
            }
        }

    })

})