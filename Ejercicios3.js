// 1, Hacer una función que reciba una pila como parámetro, y un número, la función debe de sacar el número de elementos que diga el número (segundo parámetro)
// Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 3)
// Salida: ['Manzana','Cebolla','Apio','Naranja']

console.log("Ejercicio 1 Forma Completa")

    class Stack{
        constructor(){
            this.array = []
            this.counter = 0
        }
        pop(){
            if(this.counter===0){
                console.log("Arreglo vacio")
            } else {
                this.counter--
                var salida = this.array[this.counter]
                delete this.array[this.counter]
                return salida
            }
        }
        push(item){
            this.array[this.counter] = item
            this.counter++
        }
        getStack(){
            return this.array
        }
    }

    function miFuncion(array,numItems){
        console.log(`Array Inicial: ${array}`)
        const arrayMiFunc = new Stack()
        for(var i=0;i<array.length;i++){
            arrayMiFunc.push(array[i])
        }

        var result = []
        for(var i=0;i<numItems;i++){
            result[i] = arrayMiFunc.pop()
        }
        console.log(`Salieron: ${result}`)
        console.log(`Quedaron: ${arrayMiFunc.getStack()}`)
    }

    miFuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 3)

console.log("Ejercicio 1 Forma Sencilla")

    const myStack = []

    function myFunction(myArray, n){
        for(var i=0; i<myArray.length; i++){
            myStack.push(myArray[i])
        }
        console.log(`My Initial Stack: ${myStack}`)
        for(var i=0; i<n; i++){
            // console.log(`Out: ${myStack.peek()}`)
            console.log(`Out: ${myStack[myStack.length-1]}`)
            myStack.pop()
        }
        console.log(`My Final Stack: ${myStack}`)
    }

    myFunction(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 3)

// 2.- Escribir una función reemplazar que tenga como parámetro una pila de elementos de tipo Number y dos valores también de tipo Number nuevo y viejo de forma que si el segundo valor aparece en algún lugar de la pila,sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]

function reemplazar(pilaNum,nuevoNum,viejoNum){
    console.log(`Pila original: ${pilaNum}`)
    console.log(`Num a Buscar - ${viejoNum} / Num Reemplazo - ${nuevoNum}`)
    for(var i=pilaNum.length; i>0;i--){
        if(pilaNum[pilaNum.length-1]===viejoNum){
            console.log("Numero encontrado")
            pilaNum.pop()
            pilaNum.push(nuevoNum)
            console.log(`Pila Final: ${pilaNum}`)
            return 
        } else {
            pilaNum.pop()
        }
        if(i===1){
            return console.log("Numero NO encontrado")
        } 
    }
}

reemplazar([3,2,3,4,6,8,1,2,5,5],7,2)

// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta. 
// •	Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// •	Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

const recorrido = ["Pueblo Origen", "Pueblo 1", "Pueblo 2", "destino"]

var string = "Ida: "
for(var i=0;i<recorrido.length;i++){
    if(i<recorrido.length-1){
        string += `${recorrido[i]} → `
    } else {
        string += recorrido[i]
    }   
}
console.log(string)

var string = "Regreso: "
for(var i=recorrido.length;i>0;i--){
    if(i>1){
        string += `${recorrido.pop()} → `
    } else {
        string += recorrido.pop()
    }   
}
console.log(string)

// 4.-  Un almacén tiene capacidad para apilar n contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos. 

var stackA = [1,2,3,4,5,6,7,8,9,10]
var stackB = []

function retira(n){
    var temp = 0
    while(stackA.length!==0){
        temp=stackA.pop()
        if (temp === n){
            console.log(`Contenedor ${n} Encontrado`)
            return vaciaB()
        } else {
            stackB.push(temp)
        }
    }
    if (stackA.length===0){
        console.log(`Contenedor ${n} NO Encontrado`)
        return vaciaB()
    }
}

function vaciaB(){
    while(stackB.length!==0){
        stackA.push(stackB.pop())
    }
}

console.log(`Stack A Inicial: ${stackA}`)
retira(10)
console.log(`Stack A final: ${stackA}`)

// Queues
class Queue{
    constructor(){this.collection = []}
    enqueue(item){this.collection.push(item)}
    dequeue(){return this.collection.shift()}
    length(){return this.collection.length}
    isEmpty(){
        if(this.collection.length===0){return true
        } else { return false }    }
    front(){return this.collection[0]}
}


// 5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
// •	Cola 1: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// •	Cola 2: [ amarillo, rojo, azul, morado]
// •	Cola 3: [rosa, verde, negro, blanco]
var colores = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"]
var colaColores = new Queue()
    for(i=0;i<colores.length;i++){
        colaColores.enqueue(colores[i])
    }
console.log(`Cola Colores inicial: ${colaColores.collection}`)

var colaPar = new Queue()
var colaNon = new Queue()

var len = colaColores.collection.length
for(var i=0; i<len; i++){
    if(i%2===0){
        colaPar.enqueue(colaColores.dequeue())
    } else {
        colaNon.enqueue(colaColores.dequeue())
    }
}

console.log(`Cola colores final: ${colaColores.collection}`)
console.log(`Cola par: ${colaPar.collection}`)
console.log(`Cola non: ${colaNon.collection}`)

// 6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos "colados", es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestre la cola inicial, qué elementos fueron retirados de la cola y la cola final. Sugerencia: desencole cada elemento, si tiene ticket se vuelve a encolar, sino se retira. 
// Cola:[{user:'User1',ticket:true},{user:'User2',ticket:true},{user:'User3',ticket:false},{user:'User4',ticket:true},{user:'User5',ticket:false},{user:'User6',ticket:false},{user:'User7',ticket:true},{user:'User8',ticket:true},{user:'User9',ticket:true},{user:'User10',ticket:false},{user:'User11',ticket:true}]

function encolarArreglo(arreglo,cola){
    for(var i=0;i<arreglo.length; i++){
        cola.enqueue(arreglo[i])
    }
}

function vaciarCola(colaTemp,colaFinal){
    for(var i=0; colaTemp.length()>0;i++){
        colaFinal.enqueue(colaTemp.dequeue())
    }
}

function clasificarTicket(colaTicket,colaNoTicket){
    var colaTempTicket = new Queue()
    for(i=0;colaTicket.length()>0;i++){
        if(colaTicket.front().ticket===true){
            colaTempTicket.enqueue(colaTicket.dequeue())
        } else {
            colaNoTicket.enqueue(colaTicket.dequeue())
        }    
    }
    vaciarCola(colaTempTicket,colaTicket)
}

var ticket = [{user:'User1',ticket:true},{user:'User2',ticket:true},{user:'User3',ticket:false},{user:'User4',ticket:true},{user:'User5',ticket:false},{user:'User6',ticket:false},{user:'User7',ticket:true},{user:'User8',ticket:true},{user:'User9',ticket:true},{user:'User10',ticket:false},{user:'User11',ticket:true}]

var colaTicket = new Queue()
var colaNoTicket = new Queue()

encolarArreglo(ticket,colaTicket)

console.log(`Cola ticket Inicial:`) 
console.log(colaTicket.collection)

clasificarTicket(colaTicket,colaNoTicket)

console.log(`Cola Ticket Final:`) 
console.log(colaTicket.collection)
console.log(`Cola Sin Ticket :`) 
console.log(colaNoTicket.collection)