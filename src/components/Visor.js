import { useState, useContext, useEffect} from "react";
import InputContext from "../context/InputContext";
import {evaluate} from 'mathjs'

function Visor() {
    const { resultado } = useContext(InputContext);
    

  return (
    <div className="pantalla-contenedor">
            <div className="pantalla">
                <input type="text" className="valor-pantalla" readOnly value={resultado} placeholder="Ingresa un número"/>
            </div>
    </div>
  );
}

export default Visor;
