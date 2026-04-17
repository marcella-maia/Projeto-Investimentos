import React, { useState } from 'react'

const CapturaDados = (props) => {

  const [valorInicial, setValorInicial] = useState('')
  const [aporte, setAporte] = useState('')
  const [taxa, setTaxa] = useState('')
  const [periodo, setPeriodo] = useState('')

  const aoLimpar = () => {
    setValorInicial('')
    setAporte('')
    setTaxa('')
    setPeriodo('')
    props.limparResultados()

  }

  return (
    <div className="row mt-4">
      <div className="col-6">

        <div className="mb-3">
          <label className="form-label">Valor inicial (R$)</label>
          <input type="text" className="form-control" value={valorInicial} onChange={(e) => setValorInicial(e.target.value)}/>
          <label className="form-label">Valor de aporte (R$)</label>
          <input type="text" className="form-control" value={aporte} onChange={(e) => setAporte(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label className="form-label">Taxa de juros (% ao mês)</label>
          <input type="text" className="form-control" value={taxa} onChange={(e) => setTaxa(e.target.value)}/>
          <label className="form-label">Período (meses)</label>
          <input type="text" className="form-control" value={periodo} onChange={(e) => setPeriodo(e.target.value)}/>
        </div>

        <div className="d-flex gap-2">
          <button 
            className="btn btn-primary"
            onClick={() => props.recebeDados(valorInicial, aporte, taxa, periodo)}          >
            Calcular
          </button>

          <button 
            className="btn btn-secondary"
            onClick={aoLimpar}
          >
            Limpar
          </button>
        </div>

      </div>
    </div>
  )
}

export default CapturaDados