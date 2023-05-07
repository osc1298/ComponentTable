import React, { createContext, useState } from 'react';
import {usuarios} from "../assets/data"

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(usuarios);

    const agregarUsuario = (nuevoUsuario) => {
        console.log('adentro del context', nuevoUsuario)
        setUsuario([...usuario, nuevoUsuario]);
      };

      const editarUsuario = (idUsuario, datos) => {
        const usuariosActualizados = usuario.map((usuario, index) => {
            if (index === idUsuario) {
                return { ...usuario, ...datos };
            } else {
                return usuario;
            }
        });
        setUsuario(usuariosActualizados);
    }

    const eliminarUsuario = (id) => {
      const usuariosActualizados = [...usuario];
      usuariosActualizados.splice(id, 1);
      setUsuario(usuariosActualizados);
    };

    
  return (
    <UserContext.Provider  value={{ usuario, agregarUsuario, editarUsuario, eliminarUsuario}}>
      {children}
    </UserContext.Provider>
  );
};