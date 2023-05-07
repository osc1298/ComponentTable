import React from "react";
import { Header } from "../componentes/Headers/header";

const Layout = ({children})=>{

   return( 
   <>
   <div className="relative z-0  bg-contain bg-repeat-y	 h-full w-full text-white">
   <Header/>
    <main className="w-10/12 flex items-center justify-center mx-auto mb-20 sm:mt-10 sm:mb-10">
        {children}
    </main>
    <footer className="flex items-center justify-center fixed inset-x-0 bottom-0 h-16 z-10 w-full bg-gray-900 mt-5">
       <h2 className="text-center">Una simple tabla de empleados</h2>
    </footer>
    </div>
    </>)
}

export {Layout}