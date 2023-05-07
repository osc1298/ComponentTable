import React, { createContext, useState } from 'react';


export const FormularioContext = createContext();

export const FormularioProvider = ({ children }) => {

    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    const [id, setId] = useState(undefined)


    const modificarUsuario = (id) =>{
      console.log(id, 'id en el context')
      setMostrarFormulario(true)
      setId(id)
    }

  return (
    <FormularioContext.Provider  value={{ mostrarFormulario,  setMostrarFormulario, modificarUsuario, id, setId}}>
      {children}
    </FormularioContext.Provider>
  );
};