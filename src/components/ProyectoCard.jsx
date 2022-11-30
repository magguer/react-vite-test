import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function ProyectoCard({ proyecto }) {
  const { borrarProyecto } = useContext(AppContext);

  return (
    <div className="bg-gray-700 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{proyecto.nameProject}</h1>
      <p className="text-gray-400 text-sm">{proyecto.headingProject}</p>
      <button
        className="bg-red-500 p-1 rounded-md my-3 hover:bg-red-700"
        onClick={() => borrarProyecto(proyecto.idProject)}
      >
        Eliminar Proyecto
      </button>
    </div>
  );
}

export default ProyectoCard;
