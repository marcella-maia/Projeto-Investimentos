import CapturaDados from "./CapturaDados"
const App = () => {
  return (
    <div className="container">
      
      <div className="row">
        <div className="col-12 text-center mt-5">
          <h1>Hello, Investimentos</h1>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 text-start">
          <h4>Simulador de Investimentos</h4>
          <p>Descubra quanto seu dinheiro pode render com juros compostos</p>
        </div>
        <CapturaDados />
      </div>

    </div>
  )
}

export default App