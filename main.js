let h1=document.createElement('h1')
h1.innerHTML='DOM Mainpulation Task'

let devContainer = document.createElement('div')

//create color array to use it in creating divs by for loop
let colorArray =['#91ed91','#acd8e6', '#add9e6']

//create three divs by for loop
for(let i=0 ; i<3 ;i++)
{
    let box1= document.createElement('div')
    let p1=document.createElement('p')
    p1.innerHTML='Updated Box ' + (i+1) 
    box1.style.backgroundColor=colorArray[i]
    box1.style.width = '300px'
    box1.style.height ='50px'
    box1.style.border='2px solid blue'
    box1.style.margin = '10px'
    box1.appendChild(p1)
    devContainer.appendChild(box1)
}

let items = document.createElement('ul')
for(let j=2 ;j<4;j++)
{
    let item = document.createElement('li')
    item.innerHTML='Item '+j 
    item.style.fontSize ='20px'
    items.appendChild(item)
}

document.body.appendChild(h1)
document.body.appendChild(devContainer)
document.body.appendChild(items)