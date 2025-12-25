function App() {

  const hola = "Hola Mundo";

  const auth = false;

  return (
      <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
        {auth ? 'autenticado' : 'no autenticado'}
      </div>
  )
}

export default App
