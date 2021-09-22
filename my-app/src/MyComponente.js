import React,{ Component } from 'react';

//desde clase

export default class MyComponente extends Component{
    render(){
        return(
            <>
            <h1> Componente desde clase </h1>
            <h2>jscdh</h2>
            </>
        );
        }
}

//desde una funcion

export function SegundoComponente (){
    return(
        <h2>Componente desde funcion</h2>
    )
}

//componente desde funcion de flecha
export const TercerComponente = () =>{
    return(
        <h2>Componente desde funcion de flecha</h2>
    )
}


