import React from 'react'
import { Tablas } from './Tablas'

function Filas (){
    let filas = [
        {
            titulo : "Billy Elliot",
            duración : 123,
            rating : 5,
            género : "drama",
            premios : 2

        },
        {
            titulo : "Aliens",
            duración : 142,
            rating : 4.8,
            género : "drama",
            premios : 3

        },

    ]

  return (
    <React.Fragment>
    {
        filas.map((fila, index) => (
            <Tablas {...fila}/>
        ))
    }
    </React.Fragment>

   
      
    
  )
}
export {Filas}
