import React,{useState} from 'react'
import TareaFormulario from './TareaFormulario'
import "../styles/ListaDeTareas.css"
import Tarea from "./Wishlist"

export default function ListaDeTareas() {   
    
    const[tareas,setTareas]=useState([]);
    const agregarTarea=tarea=>{
    if(tarea.texto.trim()){
        console.log(tarea)
        tarea.texto=tarea.texto.trim();
        const tareasActualizadas=[tarea, ...tareas];
        setTareas(tareasActualizadas);
    }
    }

    const eliminarTarea=id=>{
        const tareasActualizadas=tareas.filter(tarea => tarea.id !==id);
        setTareas(tareasActualizadas);
    }

    const completarTarea=id=>{
        const tareasActualizadas=tareas.map(tarea=>{
            if(tarea.id===id){
                tarea.completada=!tarea.completada;
            }
            return tarea;
        })
        setTareas();
    }
    return (
    <>
     <TareaFormulario onSubmit={agregarTarea}/>
     <div className='tareas-lista-contenedor'>
        {  
            tareas.map((tarea)=>
            <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea ={eliminarTarea}/>
            

            )
        }
     </div>
    </>
  )
}
