import Teclado from "./Teclado";
import Visor from "./Visor";
import React from "react";
import { useState } from "react";


function Cuerpo() {

  return (
    
    <div className="calculadora-contenedor">
        <Visor/>
        <Teclado/>
    </div>

  );
}

export default Cuerpo;
