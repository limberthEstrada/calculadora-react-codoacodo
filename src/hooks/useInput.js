import { useContext, useState } from "react";
import InputContext from "../context/InputContext";
import {evaluate} from 'mathjs'


const useInput = () => {
    const [expresion, setExpresion] = useState("");

    const modificarStateExpresion = (paramatro) => {
        setExpresion(paramatro)
    }

    const [resultado, setResultado] = useState(0)
    const calcularTotal  = (expresion) => {
        if(expresion)
        {
            if(expresion.includes("!"))
            {
                expresion.replaceAll("!","")
                setResultado(factorial(Number(expresion)))
            }
            else if(expresion.includes("²"))
            {
                console.log(expresion)
                String(expresion.replace("²",""))
                console.log(expresion)

                setResultado(evaluate(expresion+"**2"))
            }
            else if(expresion.includes("³"))
            {
                expresion.replaceAll("³","")
                setResultado(evaluate(expresion+"**3"))
            }
            else
            {
            setResultado(evaluate(expresion))
            }
        }
    }
    const mostrarEnElVisor  = (expresion) => {
            setResultado(expresion)
    }

    function factorial (n) {
        var total = 1; 
        for (let i=1; i<=n; i++) {
            total = total * i; 
        }
        return total; 
        }

    return {
        expresion,
        modificarStateExpresion,
        resultado,
        calcularTotal,
        mostrarEnElVisor
    }
}

export default useInput;