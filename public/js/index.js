//Selección de botones
let botones = document.querySelectorAll('.btn-calcuv1')
let resultado = document.querySelector('.boton-35')

//Seleccion de display
let display = document.querySelector('.valor-pantalla')

//Variable memoria
let memoria = []

//Array con operandos separados
let arrayOperandos = []
let arrayOperandosv2 = []
let arrayOperadores = []
let freno = true;

console.log("Holaaaaaa")

//Evento botones
botones.forEach(boton => {
    boton.addEventListener("click", function()
    {
        display.value += this.innerText
        memoria.push(this.innerText)
    })
});

//Evento resultado FINAL
resultado.addEventListener("click", function()
{
    let stringMemoria = memoria.join().replaceAll(',','')
    console.log(stringMemoria)

    particionDeOperandos(stringMemoria, arrayOperandos)
    particionDeOperadores(stringMemoria)
    display.value = separadorDeAPares()

    
    
})

//Funciones propias de la calculadora
let calculadora = (num1, num2, op) => {
    let resultado

    switch (op) {
        case '+':
            resultado = num1 + num2        
        break;
        
        case '-':
            resultado = num1 - num2        
        break;

        case '*':
            resultado = num1 * num2        
        break;
        
        case '/':
            resultado = num1 / num2        
        break;
        
        default:
            resultado = "Error de operación"
            break;
    }

    return resultado
}

//Funciones extra
function conversorAEntero(numero)
{
    return Number(numero)
}

function contieneLosOperadores(stringExpresion)
{
    return stringExpresion.includes('+') || stringExpresion.includes('-') || stringExpresion.includes('*') || stringExpresion.includes('/')
}

function particionDeOperadores(stringMemoria)
{
    for (let operador of stringMemoria) {
        if(contieneLosOperadores(operador))
        {
            arrayOperadores.push(operador)
        }
    }
}

function particionDeOperandos(stringMemoria, arrayOperandos) //12+52-6 --> //52-6
{
    let nuevoArray;
    

   // for(let letra of stringMemoria){ 
    for(let l=0; l<stringMemoria.length && freno; l++){
        console.log(stringMemoria[l])
        switch (stringMemoria[l]) {
            case '+':
                // arrayOperadores.push(stringMemoria[l])
                console.log(stringMemoria.split(stringMemoria[l]))
                nuevoArray = stringMemoria.split(stringMemoria[l]) //[12,52-6]
                if(contieneLosOperadores(nuevoArray[1]))
                {
                arrayOperandos.push(nuevoArray[0])
                }
                else
                {
                    arrayOperandos = arrayOperandos.concat(nuevoArray)
                    freno = false
                    arrayOperandosv2 = arrayOperandos
                }
                console.log(nuevoArray.length)
                if(nuevoArray.length == 2)
                {
                    particionDeOperandos(nuevoArray[1], arrayOperandos)
                }
            break;
            
            case '-':
                // arrayOperadores.push(stringMemoria[l])
                console.log(stringMemoria.split(stringMemoria[l]))      
                nuevoArray = stringMemoria.split(stringMemoria[l])
                if(contieneLosOperadores(nuevoArray[1]))
                {
                arrayOperandos.push(nuevoArray[0])
                }
                else
                {
                    arrayOperandos = arrayOperandos.concat(nuevoArray)
                    freno = false
                    arrayOperandosv2 = arrayOperandos

                }
                if(nuevoArray.length == 2)
                {
                    particionDeOperandos(nuevoArray[1], arrayOperandos)
                }
            break;

            case '*':
                // arrayOperadores.push(stringMemoria[l])
                console.log(stringMemoria.split(stringMemoria[l]))      
                nuevoArray = stringMemoria.split(stringMemoria[l])
                if(contieneLosOperadores(nuevoArray[1]))
                {
                arrayOperandos.push(nuevoArray[0])
                }
                else
                {
                    arrayOperandos = arrayOperandos.concat(nuevoArray)
                    freno = false
                    arrayOperandosv2 = arrayOperandos
                    
                }
                if(nuevoArray.length == 2)
                {
                    particionDeOperandos(nuevoArray[1], arrayOperandos)
                }
            break;
            
            case '/':
                // arrayOperadores.push(stringMemoria[l])
                console.log(stringMemoria.split(stringMemoria[l]))      
                nuevoArray = stringMemoria.split(stringMemoria[l])
                if(contieneLosOperadores(nuevoArray[1]))
                {
                arrayOperandos.push(nuevoArray[0])
                }
                else
                {
                    arrayOperandos = arrayOperandos.concat(nuevoArray)
                    freno = false
                    arrayOperandosv2 = arrayOperandos

                }

                if(nuevoArray.length == 2)
                {
                    particionDeOperandos(nuevoArray[1], arrayOperandos)
                }
            break;
        
            default:
                break;
        }
        
    }
    console.log(arrayOperandos)
    if(!freno && !contieneLosOperadores(stringMemoria))
    {
        return arrayOperandos
    }
    
}

function separadorDeAPares() //[3,5] [+]
{
    let resultado = 0
    for (let i = 0; i < arrayOperandosv2.length-1; i++) {
        for (let j = 0; j < arrayOperadores.length; j++) {
            resultado = calculadora((i==0) ? conversorAEntero(arrayOperandosv2[i]): resultado, conversorAEntero((i==(arrayOperandosv2.length-1))?arrayOperandosv2[arrayOperandosv2.length-1]:(arrayOperandosv2[i+1])), arrayOperadores[j])
           // arrayOperandosv2.length % 2 == 0 ? i+=2 : 
            if(arrayOperandosv2.length % 2 == 0)
            {
                i==0 ? i=i+2 : i=i+1
            }
            else
            {
                i=arrayOperandosv2.length
                resultado = calculadora(resultado, conversorAEntero(arrayOperandosv2[arrayOperandosv2.length-1]), arrayOperadores[j+1])
                j=arrayOperadores.length
            }
            console.log("RTA",resultado)
        }
        
    }

    return resultado
}

