//***********************************************************************************************************************

// <<============== 101. CALLBACK FUNCTION ==================>>

function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function div(a,b){
    return a/b
}

function calculate(x,y,operation){
    return operation(x,y)
}
console.log(calculate(2,2,add))
console.log(calculate(2,2,sub))
console.log(calculate(2,2,mul))
console.log(calculate(2,2,div))

//***********************************************************************************************************************

// <<============== 102. DIFFERENCE BETWEEN EXPRESSION AND DECLARATION ==================>>

// declaration
function write(x){
    console.log(x)
}

// expression
let say=function(x){
    console.log(x)
}
write("Hello")

//***********************************************************************************************************************

// <<============== 103. ...SPREAD OPERATOR MERGE TWO OBJECTS ==================>>

const personal={
    name:"Kabir",
    martialarts:[
        "Mixed marital arts",
        "Wrestling","Sambo",
        "Kickboxing","Judo",
        "FreeStyle Wrestling"
    ]
}
const physical={
    born:"1992",
    height:"165cm",
    weight:"58Kg"
}
const kabir={...personal,...physical}
console.log(kabir)

//***********************************************************************************************************************

// <<============== 105. ARRAY MAP | ARRAY REDUCE ==================>>

const numbers=[1,1,1]
const x=numbers.map((items)=>items=items+1)
        .reduce((a,b)=>a+b)
console.log(x)          // [ 2, 2, 2 ]  // 6

//***********************************************************************************************************************

// <<============== 106. BACKGROUND COLOR CHANGE ==================>>
// <<============== REFER BACKGROUNDCOLORCHANGE.HTML ==================>>

//***********************************************************************************************************************

//***********************************************************************************************************************

// <<============== 107. ARRAY MAP | ARRAY REDUCE ==================>>


