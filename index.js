let frame = document.getElementById('frame')

for (i = 0; i < 16; i++){
    let div = document.createElement('section')
    div.setAttribute('id', `section${i}`)
    frame.appendChild(div)
    for( j = 0; j < 16; j++){
        div.innerHTML += '<div class="box"></div>'
    }
}

let items = [...document.querySelectorAll('.box')]

// frame.addEventListener('m')

items.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
        item.style.backgroundColor = 'red'
    })
    item.addEventListener('touchend',()=>{
        item.style.backgroundColor = 'red'
    })
})