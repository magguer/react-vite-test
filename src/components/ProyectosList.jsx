import ProyectoCard from "./ProyectoCard";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function ProyectsList() {

  const { proyectos } = useContext(AppContext);

  if (proyectos.length === 0) {
    return <h1 className="text-white bg-gray-700 p-4 rounded-md text-center text-4xl">No hay proyectos.</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 my-5 text-center">
      {proyectos.map((proyecto) => (
        <ProyectoCard
          key={proyecto.idProject}
          proyecto={proyecto}
        />
      ))}
    </div>
  );
}

export default ProyectsList;
