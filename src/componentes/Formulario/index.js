import React, {useState, useContext, useEffect} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
import { UserContext } from '../../context/UserContext';
import { FormularioContext } from "../../context/FormularioContext";





const Formulario = ()=>{

    const {usuario, agregarUsuario, editarUsuario}= useContext(UserContext);
    const {id, setMostrarFormulario, setId} = useContext(FormularioContext)
        
    const [value, setValue] = useState({ 
        startDate: null, 
        endDate: null 
        }); 
    const [nombre, setNombre] =useState();
    const [puest, setPuesto] =useState();
    const [estado,setEstado] =useState(false)  
        
        

           
         


    const handleValueChange = (newValue) => {
        setValue(newValue); 
        } 


    const enviar = ()=>{
        
         const usuarioNuevo = {
                "nombre":nombre,
                "puesto":puest,
                "fecha":value.startDate,
                "estado": estado
            }
            console.log(usuarioNuevo, 'usuarioNuevo')
            agregarUsuario(usuarioNuevo)
            console.log(usuario, 'usuarios')
    }


    const editar = () => {
        if (id != undefined) {
          const usuarioEdita = {
            "nombre": nombre ?? usuario[id].nombre,
            "puesto": puest ?? usuario[id].puesto,
            "fecha": usuario[id].fecha,
            "estado": estado ?? usuario[id].estado
          }
          console.log(usuarioEdita, 'usuarioEdita')
          editarUsuario(id, usuarioEdita)
          setMostrarFormulario(false)
          setId(undefined)
        }
      }

    return (
        <>
        <div class="flex flex-col justify-center items-center w-full lg:w-10/12 text-black  rounded-lg bg-gray-300 p-6 ">
            <div className="mb-12 mt-5 flex justify-center items-center text-center w-full py-4">
                <h1 className="sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold text-gray-700">
                    {id != undefined ? `Modificar los datos de ${usuario[id].nombre}`:"Cargar un nuevo empleado"}
                    </h1>
            </div>
  <form className="w-full">
  
    <div class="relative mb-6 bg-blueGray-300" >
    <input
    type="text"
    value={id != undefined ? usuario[id].nombre : nombre}
    onChange={(event)=>{setNombre(event.target.value)}}
    class="flex  w-full rounded border-2 bg-stone-300 border-gray-400 py-1 px-1  text-center"
    disabled={id != undefined ? true : false}
   />
 
    </div>
    <div class="relative mb-6 bg-blueGray-300" >
                <select
                     value={id !== undefined ? puest || usuario[id].puesto : puest}
                    onChange={(event) => {
                    setPuesto(event.target.value);
            }}
            className="flex w-full rounded border-2 bg-stone-300 border-gray-400 py-1 px-1 text-center"
            placeholder="Puesto asignado"
            >    
            <option>Desarrollador</option>
            <option>QA</option>
            <option>UX/UI</option>
            </select>
 
    </div>
    <div class="relative mb-6 bg-blueGray-300" >
    <Datepicker 
        inputClassName="w-full rounded border-2 py-1 px-1  text-center   font-bold bg-stone-300 dark:bg-stone-900 dark:placeholder:text-green-100"
        toggleClassName="absolute bg-gray-400 rounded-r-lg text-white right-0 h-full px-3  focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
        primaryColor={"teal"} 
        useRange={false} 
        asSingle={true} 
        value={value} 
        displayFormat={"DD/MM/YYYY"}
        onChange={handleValueChange} 
        disabled={id!= undefined ? true : false}
        /> 
    </div>
    <div class="flex flex-col w-full items-center justify-center relative mb-6 bg-blueGray-300" >
        <div className="flex w-full justify-center items-center my-4 text-lg font-semibold py-1 px-2 ">
            <h2>Esta Activo?</h2>
        </div>
        <div className="flex w-full items-center justify-center mb-4">
            <div className="w-1/4 inline-flex items-center justify-center mx-auto">
                <label
                className="w-1/2  inline-block  hover:cursor-pointer"
                for="inlineRadio1"
                >Si</label>
                <input
                onChange={()=>{setEstado(true)}}
                type="radio"
                className="w-1/2 py-1"
                name="inlineRadioOptions"
                value={estado} />
            </div>
            <div className="w-1/4 inline-flex items-center justify-center mx-auto">
                <label
                className="w-1/2  inline-block  hover:cursor-pointer"
                for="inlineRadio1"
                >No</label>
                <input
                onChange={()=>{setEstado(false)}}
                type="radio"
                className="w-1/2 py-1"
                name="inlineRadioOptions"
                value={estado} />
            </div>
        </div>
    
           
    </div>    
  </form>
  <div class="flex no-wrap items-center justify-center relative mb-6 w-full" >
        <div className="flex justify-center w-1/2 mx-auto">
            <button onClick={()=>{setMostrarFormulario(false)
            setId(undefined)}}
            className="bg-red-600 text-white py-2 px-4 rounded-lg font-semibold cursor-pointer text-center">cancelar</button>
        </div>
        <div className="flex justify-center w-1/2 mx-auto">
            <button 
            onClick={()=>{id!=undefined ? editar():enviar()}}
            className="bg-emerald-600 text-white py-2 px-4 rounded-lg font-semibold cursor-pointer text-center"> guardar</button>
        </div>
    </div>  
</div>
        
        </>
    )
}


export default Formulario