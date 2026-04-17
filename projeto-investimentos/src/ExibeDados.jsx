const ExibeDados = (props) => {
  return (
    <div className="card border-0 shadow-sm mt-4">
      <div className="card-body">
        <p className="text-muted mb-1">Valor final acumulado</p>
        <h2 className="text-success fw-bold mb-3">{props.valorFinal}</h2>

        <hr />

        <div className="row">
          <div className="col-6">
            <p className="mb-1 text-muted">Total investido</p>
            <p className="fw-bold">{props.totalInvestido}</p>

            <p className="mb-1 text-muted">Número de aportes</p>
            <p className="fw-bold">{props.numeroAportes}</p>
          </div>

          <div className="col-6">
            <p className="mb-1 text-muted">Juros acumulados</p>
            <p className="fw-bold">{props.jurosAcumulados}</p>

            <p className="mb-1 text-muted">Rentabilidade</p>
            <p className="fw-bold text-success">{props.rentabilidade}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExibeDados