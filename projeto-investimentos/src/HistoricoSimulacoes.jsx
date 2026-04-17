const HistoricoSimulacoes = (props) => {
      return (

        <div className="card border-0 shadow-sm mt-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Histórico de simulações</h5>
              <small className="text-muted">{props.historico.length} simulações</small>
            </div>

            <div className="table-responsive">
              <table className="table table-sm align-middle mb-0">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th className="text-end">Valor final</th>
                  </tr>
                </thead>
                <tbody>
                  {props.historico.map((item) => (
                    <tr key={item.id}>
                      <td>{item.data}</td>
                      <td className="text-end fw-semibold">{item.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }
     export default HistoricoSimulacoes