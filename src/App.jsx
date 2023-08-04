import React from "react";

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/Comparametro"
import Aleatorio from "./components/basicos/Aleatorio";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props){
    return (
        <>
        <h1>Fundamentos REACT</h1>
            <Primeiro />
            <ComParametro
                titulo="Segundo Componente Aula React"
                aluno="Lucas Santos"
                nota={10}

            />
            <Aleatorio max={1} min={60}/>
        </>
    )
}