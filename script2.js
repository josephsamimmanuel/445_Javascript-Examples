                // <<============== 11-30  ==================>>
// <<============== 11. CHECKING IF A VALUE EXISTS IN A SET ==================>>

const cars=new Set(["🚗","🏎️","🚓"])
console.log(cars.has("🚓"))
console.log(cars.has("🚲"))

//***********************************************************************************************************************

// <<============== 12. ADDDING AN ELEMENT TO THE SET ==================>>

const fruits=new Set()
fruits.add("watermelon")
fruits.add("Orange")
console.log(fruits)

//***********************************************************************************************************************

// <<============== 13. GET INPUT TEXT VALUES WHILE TYPING IN REAL TIME ==================>>
// <<============== FOR OUTPUT: INPUTTEXT.HTML ==================>>

//***********************************************************************************************************************

// <<============== 14. WE CAN OMIT CURLY BRACES FOR SINGLE-LINE IF ==================>>

if(true) console.log(10)
else console.log(2)

if(false) console.log(10)
else console.log(20)

if(1===1) console.log(10)

//***********************************************************************************************************************

// <<============== 15. CONSOLE.DIR VS CONSOLE.LOG ==================>>

const numbers=[1,2,3]
const person={
    name:"Joseph Sam Immanuel",
    place:"Tirunelveli",
    born:"1992"
}

console.dir(numbers)
console.dir(person)

console.log(numbers)
console.log(person)

//***********************************************************************************************************************

// <<============== 16. UNDERSTANDING INHERITANCE ==================>>

class Vehicle{
    hasEngine=true
}
class Bus extends Vehicle{

}
class Boat extends Vehicle{

}
const a =new Bus()
console.log(a.hasEngine)

const b=new Boat()
console.log(b.hasEngine)

//***********************************************************************************************************************

// <<============== 17. LEARN HOW TO REVERSE A STRING ==================>>

let c="cool"
let reverse=c.split("").reverse().join("")
console.log(reverse)

//***********************************************************************************************************************

// <<============== 18. HOW TO DOUBLE A INTEGER ==================>>

let number=2

number=number*2
console.log(number)

number*=2
console.log(number)

number+=number
console.log(number)

number=number<<1
console.log(number)

//***********************************************************************************************************************

// <<============== 19. WHY WE USE CLOSURE? ==================>>
// <<============== FOR OUTPUT: CLOSURES.HTML ==================>>

//***********************************************************************************************************************

// <<============== 20. CONDITIONAL(TERNARY OPERATOR) ==================>>

let value=5
value==1?console.log("A"):console.log("B")

console.log(value==1?("A"):("B"))

console.log(value==1?"A":value==2?"A":value==3?"A":value==4?"A":"unknown")

//***********************************************************************************************************************

// <<============== 21. REWRITING AN IF ELSE STATEMENT USING TERNARY OPERATOR ==================>>

let score=35
let grade
if(score>=80) grade="A"
else if(score>=60) grade="B"
else if(score>=50) grade="C"
else grade="D"
console.log(grade)

grade=score >=80?"A":score >=60? "B":score>=50?"C":"D"
console.log(grade)

//***********************************************************************************************************************

// <<============== 22. ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION ==================>>

function getPropertyValues(obj,property){
    return obj[property]
}

const car={
    make:"toyato",
    model:"Camry"
}
const animal={
    type:"Dog",
    name:"Jack"
}
console.log(getPropertyValues(car,"make"))
console.log(getPropertyValues(animal,"type"))

//***********************************************************************************************************************

// <<============== 23. ACCESSING OBJECT PROPERTIES WITH DYNAMIC PROPERTY NAMES==================>>

const bird={
    species:"parrot",
    habitat:{
        region:"Rainforest",
        country:"Brazil"
    }
}
console.log(bird.habitat.region)
console.log(bird["habitat"]["country"])
        //using dynamic property names
        const property="habitat"
        const subProperty="region"
        console.log(bird[property][subProperty])

//***********************************************************************************************************************

// <<============== 24. BREAK STATEMENT ==================>>

for(var i=0;i<4;i++){
    if(i===2){
        break
    }
    console.log(i)
}

//***********************************************************************************************************************

// <<============== 26. CONTINUE STATEMENT ==================>>

for(let i=0;i<4;i++){
    if(i===2) continue
    console.log(i)
}

//***********************************************************************************************************************

// <<============== 25. CHANGING REGULAR FUNCTION TO ARROW ==================>>

function getGrade(score){
    return score>=80?"A":score>=60?"B":score>=50?"C":"D"
}
console.log(getGrade(65))

//********************** AND ****************************

// const getGrade=(score)=>{
//     return score>=80?"A":score>=60?"B":score>=50?"C":"D"
// }

//***********************************************************************************************************************

// <<============== 27. DEFAULT PARAMETERS ==================>>

    function greet(name="Anonymous"){
        console.log("Joseph",name)
    }
    greet("Adem")

//***********************************************************************************************************************

// <<============== 28. DEFINING AND CALLING A FUNCTION ==================>>

function greets(){
    console.log("Hello World")
}
greets()

//***********************************************************************************************************************

// <<============== 29. FUNCTION DECLARATION ==================>>

function geeks(name){
    console.log("Hi", name)
}
geeks("Joseph")

//***********************************************************************************************************************

// <<============== 30. FUNCTION EXPRESSION ==================>>

const geek=function(name){
    console.log("Hi",name)
}
geek("Sam")

//***********************************************************************************************************************