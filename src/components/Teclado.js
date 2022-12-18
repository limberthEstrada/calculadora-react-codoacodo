import InputContext from "../context/InputContext";
import { useState, useContext, useEffect} from "react";
function Teclado() {
  const { expresion, modificarStateExpresion,calcularTotal,mostrarEnElVisor,resultado } = useContext(InputContext);
  const [expLocal, setExpLocal] = useState("");

  const agregarInput = val => {
    setExpLocal(expLocal+val.target.innerText)
  }

  const agregarInputFinal = () => {
    calcularTotal(expLocal)
    setExpLocal(eval(resultado))
  } 

  const agregarInputInicio = (val) => {
    switch (val.target.innerText) {
        case 'x!':
            setExpLocal(expLocal+'!')

            break;
        case 'x²':
            setExpLocal(expLocal+'²')
            break;
        case 'x³':
            setExpLocal(expLocal+'³')

            break;
        default:
            break;
    }
  }
  const agregarInputFinal2 = (val) => {
    setExpLocal(expLocal+val.target.innerText)
  }
  const agregarInputEquivalente = (val) => {
    setExpLocal(Math.PI)

  }
  const agregarInputInicioAutomatico = (val) => {
    setExpLocal((expLocal/100)+'%')

  }

  const agregarInputBorrar = (val) => {
    setExpLocal('')
  }

  const agregarInputInicioFinal = (val) => {}

  useEffect(() => {
        modificarStateExpresion(expLocal)
        mostrarEnElVisor(expLocal)
  }, [expLocal])



  return (

        <div className="botones-contenedor">
            <div onClick={agregarInput} className="btn-calcu boton-1">(</div>
            <div onClick={agregarInputInicio} className="btn-calcu boton-3">x!</div>
            <div onClick={agregarInput} className="btn-calcu boton-2">)</div>
            <div onClick={agregarInputInicio} className="btn-calcu boton-4">x²</div>
            <div onClick={agregarInputFinal2} className="btn-calcu boton-5">√</div>
            <div onClick={agregarInputInicioFinal} className="btn-calcu boton-6">n √</div>
            <div onClick={agregarInputFinal2} className="btn-calcu boton-7">sin</div>
            <div onClick={agregarInputFinal2} className="btn-calcu boton-8">cos</div>
            <div onClick={agregarInputFinal2} className="btn-calcu boton-9">tg</div>
            <div onClick={agregarInputInicio} className="btn-calcu boton-10">x³</div>
            <div onClick={agregarInputFinal2} className="btn-calcu boton-11">∛</div>
            <div onClick={agregarInputInicioFinal} className="btn-calcu boton-12">x^n</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-13">1</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-14">2</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-15">3</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-16">/</div>
            <div onClick={agregarInputInicioAutomatico} className="btn-calcu boton-17">%</div>
            <div onClick={agregarInputFinal2} className="btn-calcu boton-18">ln</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-19">4</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-20">5</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-21">6</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-22">*</div>
            <div onClick={agregarInputFinal2} className="btn-calcu boton-23">log</div>
            <div onClick={agregarInputFinal2} className="btn-calcu boton-24">e</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-25">7</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-26">8</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-27">9</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-28">-</div>
            <div onClick={agregarInputBorrar} className="btn-calcu boton-29 ac">AC</div>
            <div onClick={agregarInput} className="btn-calcu boton-30">.</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-31">0</div>
            <div onClick={agregarInputEquivalente} className="btn-calcu boton-32">π</div>
            <div onClick={agregarInput} className="btn-calcuv1 btn-calcu boton-33">+</div>
            <div className="btn-calcu boton-34">MR</div>
            <div onClick={agregarInputFinal} className="btn-calcu boton-35">=</div>
        </div>
  );
}

export default Teclado;
