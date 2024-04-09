//***********************************************************************************************************************

// <<============== 76. ADD TWO NUMBERS ==================>>

let num1=10
let num2=28
let sum=num1+num2
console.log(sum)                        // 38

function add(a,b){
    return a+b
}
let total=add(10,27)
console.log(total)                      // 37

console.log(add(2,5))                   // 7

console.log(add(123123,2342553))        // 2465676

//***********************************************************************************************************************

// <<============== 77. TEMPLATE LITERALS ==================>>

let a=1;
let text=`A is ${a<0?("low"):("high")}`
console.log(text)                       // A is high

let x=1
let y=2
console.log(`x+y= ${x+y}`)

let myname="Abishek"
console.log(`Myname is ${myname}`)

//***********************************************************************************************************************

// <<============== 78. UNDERSTANDING ARRAY FOREACH METHOD - HOW TO GET THE INDEXES ==================>>

const names=["Joseph","Sam","Immanuel"]

names.forEach((items)=>{
    console.log(`Hello ${items}`)
})
console.clear()

names.forEach((items,indexes)=>{
    console.log((indexes+1)+". "+items)     // 1. Joseph 2. Sam 3. Immanuel
})

//***********************************************************************************************************************

// <<============== 79. GET LAST CHARACTER ==================>>
// <<============== REFER GETLASTCHARACTER.HTML ==================>>

//***********************************************************************************************************************

//***********************************************************************************************************************

// <<============== 80. CHANGING THE LENGTH OF AN ARRAY ==================>>

const fighters=[{
    name:"Kabir",
    botn:1998,
},
{
    name:"Islam",
    botn:1991,
},
{
    name:"Alex",
    botn:1987,
},]
console.table(fighters)
console.clear()
fighters.length=1
console.table(fighters)

//***********************************************************************************************************************

// <<============== 81. UNLIMITED ARGUMENTS IN ARROW FUNCTIONS ==================>>

const c=(...d) => console.log(d)        // [ 1, 2, 3 ]
c(1,2,3)

function e(...f){
    console.log(f)                      // [ 1, 2, 3, 4 ]
}
e(1,2,3,4)

//***********************************************************************************************************************

// <<============== 82. USE A BUTTON TO RUN THE FUNCTION ==================>>
// <<============== REFER BUTTON.HTML ==================>>

//***********************************************************************************************************************

// <<============== 83. UNLIMITED NUMBER OF ARGUMENTS IN A FUNCTION ==================>>

function show(){
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i])               // 1 , 2
    }
    for(let a of arguments){
        console.log(arguments)                 // 1 , 2
    }
    [...arguments].forEach((items)=>{
        console.log(items)                     // 1 , 2
    })
    console.log(arguments.length)               // 2
    console.log(arguments[0])                   // 1
    console.log(arguments[arguments.length-1])  // 2
}
show(1,2)

//***********************************************************************************************************************

// <<============== 84. PARAMETERS AND ARGUMENTS ==================>>

function sayHiTo(name){
    console.clear()
    console.log("Hi"+name)
    console.log("Hi",name,"!")
    console.log(`Hi ${name} !`)
}
sayHiTo("Adam")

//***********************************************************************************************************************

// <<============== 85. CONVERT AN ARRAY TO STRING AND JOIN ==================>>

const A=["A","B"]
console.clear()
const B=A.toString()        // A,B (toString)
console.log(B)
const C=A.join("")
console.log(C)              // AB  (join)

//***********************************************************************************************************************

// <<============== 86. REMOVE EMPTY SLOTS FROM AN ARRAY ==================>>

const D=[1,2, , ,3]
console.clear()
console.log(D.length)           // 5
const E=D.flat()
console.log(E)                  // [ 1, 2, 3 ]
console.log(E.length)           // 3

//***********************************************************************************************************************

// <<============== 87. CHANGE DIV CONTENT VIA TEXTBOX ==================>>
// <<============== REFER DIVCONTENT.HTML ==================>>

//***********************************************************************************************************************

//***********************************************************************************************************************

// <<============== 88. FIND ALL AGES USING BIRTH YEARS 🌹 ARRAY OF OBJECTS 🌹 ==================>>

const fighter=[{
    name:"Kabir",
    born:1998,
},
{
    name:"Islam",
    born:1991,
},
{
    name:"Alex",
    born:1987,
},]

const currentYear=new Date().getFullYear()
for(let fight of fighter){
    fight.age=currentYear-fight.born
}
console.table(fighter)

//***********************************************************************************************************************

// <<============== 89. INSERT ADJACENT HTML() METHOD ==================>>
// <<============== REFER ADJACENT.HTML ==================>>

//***********************************************************************************************************************

// <<============== 90. REMOVE THE HTML ELEMENT ONCLICK ==================>>
// <<============== REFER REMOVE ELEMENT.HTML ==================>>

//***********************************************************************************************************************

// <<============== 91. SORT AN ARRAY OF OBJECTS NUMERICALLY AND ALPHABATICALLY ==================>>

const rulers=[{
    name:"Recep",
    country:"Turkey",
    age:68,
},
{
    name:"Abdul Hamid",
    country:"Bangladesh",
    age:79,
},
{
    name:"Frank",
    country:"Germany",
    age:67,
},]
// Numerically ascending
rulers.sort((a,b)=>a.age-b.age)
// Numerically decending
rulers.sort((a,b)=>b.age-a.age)
// Alphabatically ascending
rulers.sort((a,b)=>a.name.localeCompare(b.name))
// Descending Order
rulers.sort((a,b)=>b.name.localeCompare(a.name))
console.table(rulers)

//***********************************************************************************************************************

// <<============== 92. GET VALUE FROM INPUT FIELD WHILE TYPING ==================>>
// <<============== REFER GETVALUE.HTML ==================>>

//***********************************************************************************************************************

// <<============== 93. GET CURRENT URL AND URL COMPONENTS ==================>>
// <<============== REFER GETVALUE.HTML ==================>>

//***********************************************************************************************************************

// <<============== 94. CONVERT TWO ARRAYS TO AN OBJECT ==================>>

const info1=["name","Ali"]
const info2=["born","1998"]

const infos=[info1,info2]
console.clear()
console.log(infos)                  // [ [ 'name', 'Ali' ], [ 'born', '1998' ] ]

const obj=Object.fromEntries(infos)
console.log(obj)                    // { name: 'Ali', born: '1998' }

//***********************************************************************************************************************

// <<============== 95. DELETE THE LAST N ELEMENTS FROM AN ARRAY ==================>>

const numbers=[1,2,3,4]
numbers.length=numbers.length-2
console.log(numbers)        // [ 1, 2 ]

// if u dont want to modify in original array
const n=[1,2,3,4]
const newArray=n.splice(0,2)
console.log(newArray)       // [ 1, 2 ]

//***********************************************************************************************************************

// <<============== 96. CONVERT TWO ARRAYS TO AN ARRAY OF OBJECTS ==================>>

const keys=["name","born"]
const values=["Ali",1942]

const ali=values.map((val,items)=>({[keys[items]]:val}))
console.log(ali)

//***********************************************************************************************************************

// <<============== 97. ADD REMOVE CSS CLASS IN JS ==================>>
// <<============== REFER addREMOVECSSCLASS.HTML ==================>>

//***********************************************************************************************************************

// <<============== 98. CLEAR DEVELOPER CONSOLE. ==================>>

const person={
    name:"Adam",
    surname:"Eve",
    country:"Turkey",
    city:"Rise"
}
console.table(person)
// console.clear()

//***********************************************************************************************************************

// <<============== 99. JAVASCRIPT FETCH API ARRAY SOME METHOD ==================>>

fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(users=>check(users))
function check(users){
    console.log(
        users.some(
            u=>u.name.startsWith("C"))
    )
    console.log(
        users.some(
            u=>u.address.city=="Aliyaview")
    )
    console.log(
        users.some(
            u=>u.address.city=="Rize" && u.name=='Adam'
        )
    )
}

//***********************************************************************************************************************

// <<============== 100. JAVASCRIPT DEBUGGER KEYWORD ==================>>

fetch('https://restcountries.com/v3/all')
.then(response=>response.json())
.then(users=>check(users))
function check(users){
    console.log(1)
    debugger
    console.log(2)
    console.clear()
}
//***********************************************************************************************************************