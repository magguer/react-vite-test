import ProyectoList from "./components/ProyectosList";
import ProyectosForm from "./components/ProyectosForm";

function App() {
  return (
    <main className="h-screen">
      <div className="container mx-auto m-3">
        <ProyectosForm />
        <ProyectoList />
      </div>
    </main>
  );
}

export default App;
