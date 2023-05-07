import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { FormularioContext } from '../../context/FormularioContext';
const Tabla = () => {


const {usuario, eliminarUsuario} = useContext(UserContext);
const {modificarUsuario} = useContext(FormularioContext)



  return (
    <>
    
    <div class="flex flex-col relative z-0 w-full ">
  <div class="overflow-x-auto ">
    <div class="inline-block min-w-full py-2 ">
      <div class="overflow-hidden">
        <table class="min-w-full text-center text-sm font-light">
          <thead
            class="border-b bg-gray-900 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th scope="col" class=" px-6 py-4">Nombre</th>
              <th scope="col" class=" px-6 py-4">Puesto</th>
              <th scope="col" class=" px-6 py-4">Fecha de nacimiento</th>
              <th scope="col" class=" px-6 py-4">Estado</th>
              <th scope='col' className='px-6 py-4'></th>
            </tr>
          </thead>
          <tbody className='bg-gray-500 text-white'>
            {usuario.map((usuario, index)=>(
              <>
               <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap  px-6 py-4 ">{usuario.nombre}</td>
              <td class="whitespace-nowrap  px-6 py-4">{usuario.puesto}</td>
              <td class="whitespace-nowrap  px-6 py-4">{usuario.fecha}</td>
              <td class={`whitespace-nowrap  px-6 py-4 
              font-semibold ${usuario.estado ? "text-emerald-600" : "text-red-800"}`}>{usuario.estado ? "activo" : "desactivado"}</td>
              <td class="whitespace-nowrap  px-6 py-4">
                <div className='inline-flex flex-col sm:flex-row justify-center w-full'>
                  <div className='w-full sm:w-1/4 flex items-center justify-center my-2 sm:my-0 text-center font-semibold text-lg hover:cursor-pointer'>
                    <button onClick={()=>{modificarUsuario(index)}} className='rounded-full py-1 px-4 bg-blue-400'>Editar</button>
                  </div>
                  <div className='w-full sm:w-1/4 flex items-center justify-center my-2 sm:my-0 text-center font-semibold text-lg hover:cursor-pointer'>
                    <button onClick={()=>{ eliminarUsuario(index)}}
                    className='rounded-full py-1 px-4 bg-red-600'>Eliminar</button>
                  </div>
                </div>
                
              </td>
            </tr>
              </>
            ))
           
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        
        </>
        );
};

export default Tabla;