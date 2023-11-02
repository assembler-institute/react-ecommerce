import React from 'react'
import "../styles/Wishlist.css"
export default function Wishlist({id,texto,completada,completarTarea,eliminarTarea}){
     return (
    <>
<div className={completada ? "tarea-contenedor completada":"tarea-contenedor"}>
    <div className='tarea-texto' onClick={()=>completarTarea(id)}>
{texto}
    </div>
    <div className='tarea-icono' onClick={()=>eliminarTarea(id)}>
X
    </div>
</div>
    </>
  )
}
