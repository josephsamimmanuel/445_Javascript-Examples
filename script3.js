//***********************************************************************************************************************

// <<============== 31. REST PARAMETER ==================>>

function add(...numbers){
    console.log(numbers)  // [ 1, 2, 5 ]

    for(let number of numbers)(
        console.log(number)  // 1, 2, 5 
    )
}
add(1,2,5)

//***********************************************************************************************************************

// <<============== 32. RETURNING AN OUTPUT ==================>>

function greet(){
    return "Salem"
}

let greeting=greet()  
console.log(greeting)   // Salem

//***********************************************************************************************************************

// <<============== 33. USING A PARAMETER ==================>>

function greets(name){
    console.log("Hello",name,"!")
}
greets("Joseph")
greets("Sam")    // Hello Joseph ! Hello Sam !

//***********************************************************************************************************************

// <<============== 34. USING A MULTIPLE PARAMETER ==================>>

function printPersonInfo(name,age){
    console.log(`${name} is ${age} years old`)
}
printPersonInfo("Joseph",31)    // Joseph is 31 years old

//***********************************************************************************************************************

// <<============== 35. RETURN STATEMENT ==================>>

function a(){
   return 1 
}
console.log(a())    // 1

let b=a()
console.log(b)  // 1

//***********************************************************************************************************************

// <<============== 36. USING THE TERNARY OPERATOR IN A FUNCTION ==================>>

function getGrade(score){
    return score>=80?"A":score>=60?"B":score>=50?"C":"D"
}
console.log(getGrade(55))

//***********************************************************************************************************************

// <<============== 37. ACCESSING OBJECT PROPERTIES WITH SPECIAL CHARACTERS ==================>>

const car={
    "make&model":"Ferrari",
    "color":"red",
    "@#^$*":"$"
}
console.log(car["make&model"])
console.log(car["color"])
console.log(car["@#^$*"])

//***********************************************************************************************************************

// <<============== 38. ARRAY DESTRUCTURING ==================>>

const [f]=[1,2,3,4,5]
console.log(f)  // 1

const [c]=[6,7,8,9,10]
console.log(c)  // 6

const [d,e]=[1,2,3]
console.log(d)  // 1
console.log(e)  // 2

const arr=[1,2,3]
const [g,h]=arr
console.log(g)     //1
console.log(h)     //2

const [x,y,z]=[1,2,3]
console.log(x)  // 1
console.log(y)  // 2
console.log(z)  // 3

//***********************************************************************************************************************

// <<============== 39. ...SPREAD AND SET - MERGING ARRAYS AND OBTAINING UNIQUE VALUES ==================>>

const arr1=[1,2,1]
const arr2=[2,1,2]
const arr3=[...arr1,...arr2]
console.log(arr3)   // [ 1, 2, 1, 2, 1, 2 ]

const arr4=[...new Set(arr3)]
console.log(arr4)   // [ 1, 2 ]

//***********************************************************************************************************************

// <<============== 40. ASYNC/AWAIT - USING DESTRUCTURING ASSIGNMENT ==================>>

const url="https://jsonplaceholder.typicode.com/users/2"

async function fetchData(){
    const response=await fetch(url)

    // const user=await response.json()
    // console.log(user.name)

    const { name }=await response.json()
    console.log(name)
}
fetchData()

//***********************************************************************************************************************

// <<============== 41. ASYNC/AWAIT  ==================>>

const uri="https://restcountries.com/v3.1/all"

async function fetchDatas(){
    const response=await fetch(uri)
    const countries=await response.json()
    console.log(countries[0].name.common)
}
fetchDatas()

//***********************************************************************************************************************

// <<============== 42. JAVASCRIPT STATIC METHODS IN A CLASS  ==================>>

class Car{
    constructor(name,price){
        this.name=name
        this.price=price
    }
    static comparePrice(a,b){
        if(a.price>b.price)
        return `${a.name} costs more`
        else if(b.price>a.price)
        return `${b.name} costs more`
        else return `both same price`
    }
}
const audi=new Car("Audi",11)
const tata=new Car("Tata",9)
const togg=new Car("Togg",9)

console.log(Car.comparePrice(audi,togg))

//***********************************************************************************************************************

// <<============== 43. ITERATING OVER THE ELEMENTS OF THE SET  ==================>>

const cars=new Set(["Red","Green"])
for(const car of cars){
    console.log(car)
}
    cars.forEach((car)=>{
        console.log(car)
    })

//***********************************************************************************************************************

// <<============== 44. REMOVING DUPLICATES FROM AN ARRAY WITH THE SPREAD OPERATOR AND SET  ==================>>

const array=[1,2,2,4,5]
const uniquearr=[...new Set(array)]
console.log(uniquearr)

//***********************************************************************************************************************

// <<============== 45. ALERT, PROMPT AND TEMPLATE LITERALS  ==================>>

// let age=prompt("Your age?")
// alert(isNaN(age)?"Enter correct age":`${age}`)

// let dob=prompt("Your age")
// alert((isNaN(dob) || dob==="")?"Enter a correct age":`You are ${dob} years old`)

//***********************************************************************************************************************

// <<============== 46. TOGGLE PASSWORD VISIBILITY USING CHECKBOX  ==================>>
// <<============== REFER TOGGLEPASSWORD.HTML  ==================>>
// <<============== REFER togglePassVisibility.HTML  ==================>>

    //    var pass= document.getElementById("pass")
    //    var check= document.getElementById("check")

    //    check.addEventListener("click",()=>{
    //     if(check.checked) pass.type="text"
    //     else pass.type="password"
    //    })

//***********************************************************************************************************************

// <<============== 47. SET - DELETING AN ELEMENT  ==================>>

const carss=new Set(["red","green"]);
console.log(carss)  // { 'red', 'green' }

const deleteCar=carss.delete("green")
console.log(carss)  //  { 'red' }

const deleteRedCar=carss.delete("red")
console.log(carss)  //  {}

//***********************************************************************************************************************

// <<============== 48. SET - STORES ONLY UNIQUE ELEMENTS  ==================>>

const fruits=new Set()

fruits.add("apple")
console.log(fruits) // { 'apple' }

fruits.add("mango")
console.log(fruits) // { 'apple', 'mango' }

fruits.add("mango")
console.log(fruits) // { 'apple', 'mango' }

fruits.add("mango")
console.log(fruits) // { 'apple', 'mango' }

fruits.add("apple")
console.log(fruits) // { 'apple', 'mango' }

//***********************************************************************************************************************

// <<============== 49. STATIC PROPERTY IN A CLASS  ==================>>

class Fruit {
    static count=0
    constructor(){
        Fruit.count++
    }
}
const apple=new Fruit()
const orange=new Fruit()
console.log(Fruit.count)        // 2


//***********************************************************************************************************************

// <<============== 50. WHY THIS CODE IS NOT WORKING  ==================>>

const ball=["football","basketball"]
for(let i=0;i<ball.length;i++){
        console.log(ball[i])
}

//***********************************************************************************************************************

// <<============== 51. SWAPPING  TWO ARRAY ELEMENTS  ==================>>

const players=[
    {
        name:"Joseph",
        age:"31"
    },
    {
        name:"Sam",
        age:"41"
    },
    {
        name:"Immanuel",
        age:"21"
    },
    {
        name:"Selvin",
        age:"51"
    },
];

[players[0],players[1]]=[players[1],players[0]]
console.log(players)

//***********************************************************************************************************************

// <<============== 52. AN EXAMPLE FOR FOREACH  ==================>>

const employee=[{
    name:"Joseph",
    age:"31",
    email:"josesamimmanuel@gmail.com"
},{
    name:"Sam",
    age:"21",
    email:"samjose444@gmail.com"
},{
    name:"Immanuel",
    age:"11",
    email:"immanueljosephsam@gmail.com"
},{
    name:"Joseph Sam Immanuel",
    age:"41",
    email:"josephsamimmanuel@gmail.com"
},];

employee.forEach((items)=>{
    console.log(`${items.name} age is ${items.age}. His email ID is ${items.email}`)
})

//***********************************************************************************************************************

// <<============== 53. ARRAY DESTRUCTURING AND ...REST ELEMENTS  ==================>>

const numbers=[10,20,30,40]
const [num1,num2,...num3]=numbers
console.log(num1,num2,num3)     // 10 20 [ 30, 40 ]

//***********************************************************************************************************************

// <<============== 54. ADDING DROP-DOWN LIST(HTML SELECT)  ==================>>
// <<============== REFER DROPDOWNLIST.HTML  ==================>>

//***********************************************************************************************************************

// <<============== 55. REMAINDER OPERATOR  ==================>>

console.log(3%2)        // 1
console.log(4%2)        // 0

let n=3;
let isEven= (n%2===0)?(`Number ${n} is Even`):(`Number ${n} is Odd`)
console.log(isEven)

//***********************************************************************************************************************

// !!!!!!!!!! <<============== 56. REDUCE AND REDUCE RIGHT  ==================>> !!!!!!!!!!!

const names=["Adam","Eve"];
const reduce=names.reduce(
    (a,b)=> 
    {
       return a+" "+b
    }
)
console.log(reduce)

const namee=["Adam","Eve"];
const reducee=names.reduceRight(
    (a,b)=> 
    {
       return a+" "+b
    }
)
console.log(reducee)

//***********************************************************************************************************************

// <<============== 57. TYPEOF OPERATOR  ==================>>

let val1=12345678901234567890n
console.log(typeof val1)        // bigint

let val2=2
console.log(typeof val2)        // number
 
let val3="3"
console.log(typeof val3)        // string

const chars="hello"
const asciiCode=chars.charCodeAt(0)
console.log(asciiCode)          // 104

//***********************************************************************************************************************

// <<============== 58. CONVERTING STRING TO NUMBER  ==================>>

let s="13"
console.log(typeof s)       // string

let m=+s
console.log(typeof m)       // number

console.log(1+"1")          // 11
console.log(1+ +"1")        // 2

//***********************************************************************************************************************

// <<============== 59. USE CONTINUE WITH FOR...OF  ==================>>

const number=[1,2,3,4,5]
for(const num of number){
    if(num==3) continue
    console.log(num)                        // 1 , 2 , 4 , 5
}

//***********************************************************************************************************************

// <<============== 60. USE BREAK WITH FOR...OF  ==================>>

const set=[1,2,3,4,5]
for(const num of set){
    if(num==4) break
    console.log(num)        // 1 , 2 , 3
}

//***********************************************************************************************************************

// <<============== 61. JAVASCRIPT FUNCTION SCOPED VARIABLE  ==================>>

w()
function w(){
    if(true){
        var a=1
    }
    console.log(a)      // 1
}
console.log(a)          // undefined

//***********************************************************************************************************************

// <<============== 62. JAVASCRIPT CLASS - SUPER KEYWORD ==================>>

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
class footballer extends Person{
    constructor(name, age, position){
        super(name,age)
        this.position=position
    }
}

const babe= new footballer("Gareth Nale",27,"Spinner")
console.log(babe.age)                   // 27

//***********************************************************************************************************************

// <<============== 63. RETURN VALUE FROM A FUNCTION  ==================>>

function add(a,b){
    return a+b
}
let addition=add(10,20)
console.log(addition)


//***********************************************************************************************************************

// <<============== 64. HTML SLIDER RANGE  ==================>>
// <<============== REFER SLIDER.HTML  ==================>>


//***********************************************************************************************************************

// <<============== 65. EQUALITY OF ARRAYS  ==================>>

const value1=[1,2]
const value2=[1,2]
console.log(value1===value2)                            // false

console.log(
    JSON.stringify(value1)===JSON.stringify(value2)     // true
)

//***********************************************************************************************************************

// <<============== 66. ENUM  ==================>>

const country=Object.freeze({
    INDIA: Symbol(91),
    USA: Symbol(44)
})

//***********************************************************************************************************************

// <<============== 67. DOCUMENT.QUERYSELECTOR  ==================>>
// <<============== REFER DOCUMENT QUERY SELECTOR.HTML  ==================>>

//***********************************************************************************************************************

// <<============== 68. CLASS  ==================>>

class Country{
    constructor(name,dialingCode){
        this.name=name
        this.dialingCode=dialingCode
    }
}

let india=new Country("India","+91")
console.log(india)

//***********************************************************************************************************************

// <<============== 69. CHANGE BACKGROUND COLORS USING RADIO BUTTON  ==================>>
// <<============== REFER RADIO BUTTON.HTML  ==================>>

//***********************************************************************************************************************

//***********************************************************************************************************************

// <<============== 70. TYPEOF FOR A CLASS  ==================>>

class Circle{
    constructor(radius){
        this.radius=radius
    }
    getarea(){
        return Math.PI*this.radius**2
    }
}
console.log(typeof Circle)      // function

const circle1=new Circle(4)
console.log(circle1.getarea())  // 50.26548245743669
console.log(typeof circle1)     // object

//***********************************************************************************************************************

// <<============== 71. WHAT DOES IT MEAN? VANILLA JAVASCRIPT  ==================>>

let number1 =1
let number2=2
console.log(number1+number2)        // 3

//***********************************************************************************************************************

// <<============== 72. {SUB / DERIVED / CHILD CLASS} {SUPER / BASE / PARENT CLASS} ==================>>

// super / base / parent class
class Persons{
    constructor(name,age){
        this.name=name
        this.age=age
    }
}

// sub / derived / child class
class President extends Persons{
    constructor(name,age,country){
        super(name,age)
        this.country=country
    }
}

// sub / derived / child class
class Footballer extends Persons{
    constructor(name,age,goals){
        super(name,age)
        this.goals=goals
    }
}

//***********************************************************************************************************************

// <<============== 73. JS REMAINDER USING AN OBJECT AS A FUNCTION PARAMETER / ARGUMENT ==================>>

const henry={
    born:1977,
    number:7,
    height:188,
    children:["Tea","Tatiana","Tristan","Gabriel"]
}

function show(player){
    console.log(player)
}
show(henry)

//***********************************************************************************************************************

// <<============== 74. JS REMAINDER PARAMETER / ARGUMENT ==================>>

function test(paramenter1, paramenter2){
    console.log(paramenter1)
    console.log(paramenter2)
}
let argument1="coffee"
let argument2="Tea"
test(argument1,argument2)

//***********************************************************************************************************************

// <<============== 75. CONSOLE.TABLE() METHOD ==================>>

const fighter1={
    name:"Muhammed Ali",
    born:1942,
};
console.table(fighter1)
console.clear()

const fighter2={
    name:"Bruce Lee",
    born:1940,
};
console.table(fighter1)
console.table([fighter1,fighter2])
console.clear()

console.table([fighter1,fighter2],["name","born"])

//***********************************************************************************************************************








