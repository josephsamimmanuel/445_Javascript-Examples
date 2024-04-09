    // <<============== 1-10  ==================>>
// <<============== 1. BRACKET NOTATION ==================>>

const students={
    fullname:"Joseph Sam Immanuel",
    born:"Tirunelveli",
    address:{
        street:"15 karunya Street",
        district:"Tirunelveli",
        country:"India",
    }
}
console.log(students["born"])
console.log(students["address"]["country"])

let name="fullname"
console.log(students[name])

//*********************************************************************************************************************** */


// <<============== 2. OBJECT DESTRUCTURING  ==================>>

const mydetails={
    fullname:"Joseph Sam Immanuel",
    born:"Tirunelveli",
    address:{
        street:"15 karunya Street",
        district:"Tirunelveli",
        country:"India",
    }
}

const { born,address, district }=mydetails
console.log(born,address["district"])

//*********************************************************************************************************************** */

// <<============== 3. OBJECT DESTRUCTURING ADVANCED ==================>>

const advance={
    fullname:"Joseph Sam Immanuel",
    born:"Tirunelveli",
    address:{
        street:"15 karunya Street",
        city:"Tirunelveli",
        country:"India",
    }
}
const {address: {country} } =advance
console.log(country)

//*********************************************************************************************************************** */

// <<============== 4. OBJECT USING DOT NOTATION ==================>>

const dot={
    fullname:"Joseph Sam Immanuel",
    born:"Tirunelveli",
    address:{
        street:"15 karunya Street",
        city:"Tirunelveli",
        country:"India",
    }
}
console.log(dot.born,dot.address.street)

//*********************************************************************************************************************** */

// <<============== 5. PROMISES IN JAVASCRIPT ==================>>

const amazon= new Promise((resolve,reject)=>{
    resolve("Sucessful")
})
amazon
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})

//*********************************************************************************************************************** */

// <<============== 6. HOW TO EXIT A LOOP ==================>>

for (var i=0;i<6;i++){
    if(i===2) continue
    console.log(i)
}

for (var i=0;i<6;i++){
    if(i===2) break
    console.log(i)
}

//*********************************************************************************************************************** */

// <<============== 7. REPLACE CONSOLE WITH CONSILE ==================>>

const consile=console
consile.log("🐱 🐱 🐱 🐱")

//*********************************************************************************************************************** */

// <!-- <<============== 8. CHANGING HTML INPUT TEXT VALUE BASED ON HTML SELECT BOX SELECTION ==================>> -->
// <<============== FOR OUTPUT: GO TO INDEX.HTML ==================>>

var employees=document.getElementById("employees")
var mail=document.getElementById("mail")

employees.addEventListener("change",function(){
    mail.value=employees.value
})

//*********************************************************************************************************************** */

// <<============== 9. CHANGING HTML INPUT TEXT VALUE BASED ON HTML SELECT BOX SELECTION - ONCHANGE ==================>>
// <<============== FOR OUTPUT: GO TO JAVASCRIPT.HTML ==================>>


//*********************************************************************************************************************** */


// <<============== 10. JAVASCRIPT ALERT, PROMPT AND TEMPLATE LITERALS ==================>>
// <<============== FOR OUTPUT: GO TO PROMPT.HTML ==================>>

let age = prompt("Your Age is?");
if (age === "" || isNaN(age)) {
    alert("AGE MUST BE A NUMBER");
} else {
    alert(`You are ${age} years old`);
}

//*********************************************************************************************************************** */

