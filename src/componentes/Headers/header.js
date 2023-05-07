import React, { useState, useContext } from "react";
import SideBar from "../SideBar/index";
import { FormularioContext } from '../../context/FormularioContext';

const Header = ({props})=>{
 
    const {mostrarFormulario,  setMostrarFormulario, id }= useContext(FormularioContext);

    return(
        <>
        <header className="w-full py-2 flex justify-end items-center relative z-0 bg-gray-900 h-24">
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 text-center text-gray-700">
                <button className="w-full bg-emerald-400 rounded-full py-2 px-4 " onClick={()=>{setMostrarFormulario(true)}}>Cargar Nuevo Empleado</button>
            </div>
        </header>
        {
            mostrarFormulario ? (
                <>
                    {
                        id == undefined ?(
                        <>
                        <SideBar setMostrarFormulario={setMostrarFormulario}/>
                        </>):(<>
                            <SideBar setMostrarFormulario={setMostrarFormulario} id={id}/>
                        </>)
                    }
                <SideBar setMostrarFormulario={setMostrarFormulario}/>
                </>
            ):(<>
            
            </>)
        }
        
        </>
    )
}


export {Header}