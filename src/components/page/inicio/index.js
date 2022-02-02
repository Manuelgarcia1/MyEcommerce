import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio">   
            <h1>Tienda de zapatillas, lo mejor en calidad</h1>
            <img src={Portada} alt=""/>
        </div>
    )
}
