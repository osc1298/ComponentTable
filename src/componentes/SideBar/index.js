import React from "react";
import Formulario from "../Formulario";

const SideBar = ({setMostrarFormulario, id})=>{


    return(
        <>
        <aside className="flex flex-col fixed right-0 top-0 z-40 h-screen w-80 bg-gray-400 ">
                <div className="flex py-2 px-4 w-full justify-end mx-auto">
                    <button className="h-8 w-8 flex justify-center items-center py-2" onClick={()=>{setMostrarFormulario(false)}}>
                        <svg className="w-full h-full" viewPort="0 0 12 12" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="11" 
                        x2="11" y2="1" 
                        stroke="black" 
                        stroke-width="2"/>
                        <line x1="1" y1="1" 
                            x2="11" y2="11" 
                            stroke="black" 
                        stroke-width="2"/>
                        </svg>
                      </button>
                </div>
                <div className="flex justify-center">
                    {
                        id == undefined ?(<>
                        <Formulario/>
                        </>):(<>
                            <Formulario id={id}/>
                        </>)
                    }
                   
                </div>
        </aside>
        </>
    )
}

export default SideBar