const ExibeDados = (props) => {
  return (
    <div className="row mt-4">
      <div className="col-12">
        <h4>Resultado da simulação</h4>
        <p>Valor final acumulado: {props.valorFinal}</p>
        <p>Total investido: {props.totalInvestido}</p>
        <p>Número de aportes: {props.numeroAportes}</p>
        <p>Juros acumulados: {props.jurosAcumulados}</p>
        <p>Rentabilidade: {props.rentabilidade}</p>
      </div>
    </div>
  )
}

export default ExibeDados