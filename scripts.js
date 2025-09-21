let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let Container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.thumb')

btnNext.onclick = () => moveItemsOnclick('next')
btnBack.onclick = () => moveItemsOnclick('back')

function moveItemsOnclick(type) {
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItem = document.querySelectorAll('.thumb .thumb-item')

    if(type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItem[0])   
        Container.classList.add('next')

    } else {
        list.prepend(listItems[listItems.length -1])
        thumb.prepend(thumbItem[listItems.length - 1])
        Container.classList.add('back')
    }  

    setTimeout(() => {
        Container.classList.remove('next')
         Container.classList.remove('back')
    }, 3000);
}