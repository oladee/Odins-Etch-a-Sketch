let frame = document.getElementById('frame')
let reset = document.querySelector('button')

let limit = 16

function heatMa(){
    let items = [...document.querySelectorAll('.box')]
    
    items.forEach((item)=>{
        
        item.addEventListener('mouseover',()=>{
            item.style.backgroundColor = 'red'
        })
        item.addEventListener('touchend',()=>{
            item.style.backgroundColor = 'red'
        })
    })
}


reset.addEventListener('click',()=>{
    let newlimit = prompt('what will be your new dimesion p.s Max of 100')
    console.log(newlimit)
    if (newlimit < 101){
        frame.innerHTML = ""
        limit = newlimit
        createBoxes(newlimit);
    }
    else{
        createBoxes(limit)
    }
    heatMa()
})

function createBoxes(limit){
    for (i = 0; i < limit; i++){
        let div = document.createElement('section')
        div.setAttribute('id', `section${i}`)
        frame.appendChild(div)
        for( j = 0; j < limit; j++){
            div.innerHTML += '<div class="box"></div>'
        }
    }
}

createBoxes(limit)
heatMa()

