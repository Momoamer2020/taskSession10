let nameArray= ['osama' , 'ali', 'áhmed']

//Using anonymous  function
nameArray.forEach(function(element){
    console.log(`hello ${element}`)
})

let newMapArry= nameArray.map(function(element){
    return `hello ${element}`
});

console.log(`using Map = ${newMapArry}`)

let nums =[10,20,30,40,50]
nums.forEach(element=>{
    console.log(element + element)
})

console.log(nums)

let newArray= nums.map(element=> {
    return element+element
})

console.log(`map array ${newArray}`)


let numGrades=[20,40,50,60,70,80]
let newNmuGrades = numGrades.filter(element => element>=50)
console.log(newNmuGrades)



let element1 = document.createElement('h1')
element1.innerHTML='title'
element1.style.backgroundColor='red'

let paragraph = document.createElement('p')

paragraph.innerHTML='this is my number'

document.body.appendChild(element1)


// Create html
//<div>
//  <h1>Title</h1>
//  <div>
//      <a>Google</a>
//      <p>Test</p></div>
// </div>
let div1= document.createElement('div')
let h11= document.createElement('h1')
let div2= document.createElement('div')
let a= document.createElement('a')
let p= document.createElement('p')

h11.innerHTML='Title'
a.innerHTML='Google'
a.setAttribute('href','http://google.com')
p.innerHTML='Test'

div2.append(a,p)
div1.append(h1,div2)

document.body.appendChild(div1)



