import React from "react";
import {Layout} from "./layout/index"
import Tabla from "./componentes/Tabla";
import { UserProvider } from "./context/UserContext";
import { FormularioProvider} from "./context/FormularioContext"

function App() {
  
  return (
    <>
    <FormularioProvider>
      <UserProvider >
      <Layout>
        <Tabla />
      </Layout>
    </UserProvider>
    </FormularioProvider>
    </>
  );
}

export default App;
