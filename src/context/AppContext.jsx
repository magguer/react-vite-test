import { createContext, useState, useEffect } from "react";
import { proyectos as data } from "../json/poryectos";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [proyectos, setProyetos] = useState([]);

  useEffect(() => {
    setProyetos(data);
  }, []);

  function crearProyecto(proyecto) {
    setProyetos([
      ...proyectos,
      {
        nameProject: proyecto.nameProject,
        headingProject: proyecto.headingProject,
        idProject: proyectos.length,
      },
    ]);
  }

  function borrarProyecto(idProject) {
    setProyetos(
      proyectos.filter((proyecto) => proyecto.idProject !== idProject)
    );
  }

  return (
    <AppContext.Provider
      value={{
        proyectos,
        borrarProyecto,
        crearProyecto,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
