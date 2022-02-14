/* console.log(a)
console.log(c) */

/* Primitívek:

STRING: */

/* console.log("HelloWorld!")               //backtick-el lehet sort törni, a többivel nem!
console.log('HelloWorld!')
console.log(`Hello
World!`) */

/* NUMBER: */

/* console.log(typeof NaN)      // Not A Number
console.log(typeof 2)           // "typeof" -> kiírja a típusát 
console.log(0 / 0)              // érvénytelen matematikai műveleteknél is NaN az eredmény
console.log(2.14)  */           // tört számok is vannak, de csak "pontal"

/* BOULEAN: */

/* console.log(true)               // igaz vagy hamis álítások
console.log(false) */

/* EGYÉB: */

/* console.log(undefined)             // "undefined" érték nélküli-t jelenti, míg a "null" valamilyen dolog (főleg objektum) nem található
console.log(null)                  // megpróbál object-et csinálni, de nem tudta létrehozni, mert hiányzott, ezért "null"...

console.log(typeof undefined)      // típusa undefined, míg a null object
console.log(typeof null)  */ 


/* Adatstruktúrák:

ARRAY:



OBJECT: */

/* console.log({
    "title": "Start coding",
    "type": "solo",
    "difficulty": 4.1,
    "usefullness": 4.2,
    "enjoyability": 3.7,
    "materials": 3.4,
    "tasks": [
        {"title": "Bank accounts", "description": "Model 3 bank accounts"},
        {"title": "100 doors", "description": "There are 100 doors"},
        {"title": "Word filter", "description": "Write a function"}
    ]
})   */


/* Változók: */

// a jS a változók esetében 2 lépcsőfok van: inicializálás : itt van, és van értéke
                                            


/* var a = "Hello1"         // valahol létrejön, kiszedi, és a -1ik sorba rendezi, és lefoglalja és a 0-ik sorba viszi (értéket is ad neki)       
let b = "Hello2"
const c = "Hello3" */


/* console.log(a)
console.log(b)
console.log(c) */


/* Függvények: */

/* function d() {

    if (1 + 1 === 2) {
    }

    var a = "Hello1"
    let b = "Hello2"
    const c = "Hello3"
    console.log(a)
    console.log(b)
    console.log(c)
}
d() */


/* let e = 1
console.log(e)
e = 2
console.log(e)
e = e * 2
console.log(e) */
/* 
function multiplyByTwo(num) {
    console.log(num)
    return num * 2                
}

let f = multiplyByTwo(1)

console.log(f)
console.log(multiplyByTwo(1))
console.log(num)

 */
/* Metódusok: */
//objektumban elmentett függvények

/* let g = {
    myMethod: function (){
        console.log("Hello");
    }
}
g.myMethod() */



/* let window = {
    addEventListener: function (eventName, eventFunction){
        if ( eventName === "load" ) {
            eventFunction()
        }
    }
}
window.addEventListener("load", loadEvent) */

let h = {
    anotherMethod: function(text){
        return `You sent this the following argument to this method: ${text}`
    }
}
let i = h.anotherMethod("argument")

console.log(i)
console.log(h.anotherMethod("another argument"))