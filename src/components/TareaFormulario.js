import React,{useState} from "react";
import "../styles/TareaFormulario.css"
import { v4 as uuidv4 } from 'uuid';
import Segunda from "./Segunda";

function TareaFormulario(props){
    const[input,setInput] = useState("");
    const manejarCambio = e => {
setInput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva={
            id:uuidv4(),
            texto: input,
            competada: false
        }
 props.onSubmit(tareaNueva);
    }
return(
    <>
    <form onSubmit={manejarEnvio}
    className="tarea-formulario" >
        <input
            className="tarea-input"
            type="text"
            placeholder="Wishlist"
            name="texto"
            onChange={manejarCambio}
        />
        <button className="tarea-boton">Add</button>

    </form>
    
    <button to={<Segunda/>}>ALL Finished</button>
    </>
    
);

}
export default TareaFormulario;