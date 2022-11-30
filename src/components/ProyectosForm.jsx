import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

function ProyectosForm() {
  const { crearProyecto } = useContext(AppContext);
  const [nameProject, setNameProject] = useState("");
  const [headingProject, setHeadingProject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameProject === "" || headingProject ==="") {

      return alert("Debes completar todos los campos.")

    }

    crearProyecto({
      nameProject,
      headingProject,
    });
    setNameProject("");
    setHeadingProject("");
  };

  const inputStyle = "border-color-red px-4 py-2 rounded-md w-full mb-4";
  const buttonStyle = "mx-auto bg-green-500 px-3 py-2 rounded-md text-white";

  return (
    <div className="mx-auto max-w-xl my-10 bg-gray-500 p-5 rounded-md">
      <form onSubmit={handleSubmit}>
        <h1 className="text-white text-2xl font-bold mb-3 text-center">Creador de Proyectos</h1>

        <input
          className={inputStyle}
          onChange={(e) => setNameProject(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Nombre del Proyecto"
          value={nameProject}
        />
        <input
          className={inputStyle}
          onChange={(e) => setHeadingProject(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Rubro del Proyecto"
          value={headingProject}
        />
        <div className="text-center">
          <button className={buttonStyle}>Crear Proyecto</button>
        </div>
      </form>
    </div>
  );
}

export default ProyectosForm;
