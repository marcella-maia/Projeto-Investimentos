import CapturaDados from "./CapturaDados"
import ExibeDados from "./ExibeDados"
import HistoricoSimulacoes from "./HistoricoSimulacoes"
import { useState } from 'react'

const App = () => {
  const [valorFinal, setValorFinal] = useState('')
  const [numeroAportes, setNumeroAportes] = useState('')
  const [jurosAcumulados, setJurosAcumulados] = useState('')
  const [rentabilidade, setRentabilidade] = useState('')
  const [totalInvestido, setTotalInvestido] = useState('')
  const [historico, setHistorico] = useState([])

  const limparResultados = () => {
  setValorFinal('')
  setTotalInvestido('')
  setNumeroAportes('')
  setJurosAcumulados('')
  setRentabilidade('')
}

  const recebeDados = (valorInicial, aporte, taxa, periodo) => {
  const vi = Number(valorInicial.replace(',', '.'))
  const ap = Number(aporte.replace(',', '.'))
  const tx = Number(taxa.replace(',', '.')) / 100
  const pe = Number(periodo)

  let montante = vi

  for (let i = 1; i <= pe; i++) {
    montante = montante * (1 + tx) + ap
  }

  const totalInvestidoCalculado = vi + (ap * pe)
  const juros = montante - totalInvestidoCalculado
  const rent = totalInvestidoCalculado !== 0 ? (juros / totalInvestidoCalculado) * 100 : 0
  

  setValorFinal('R$ ' + montante.toFixed(2))
  setTotalInvestido('R$ ' + totalInvestidoCalculado.toFixed(2))
  setNumeroAportes(pe)
  setJurosAcumulados('R$ ' + juros.toFixed(2))
  setRentabilidade('+' + rent.toFixed(2) + '%')

  const novaSimulacao = {
      id: Date.now(),
    data: new Date().toLocaleString("pt-BR"),
    valor: 'R$ ' + montante.toFixed(2)
}
setHistorico([...historico, novaSimulacao])
}

  return (
<div className="container py-4">
  <div className="row justify-content-center">
    <div className="col-12 col-lg-7">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h5>Hello, Investimentos</h5>
        </div>
      </div>
  
      <div className="row mb-3">
        <div className="col-12">
          <h3 className="fw-bold mb-1">Simulador de Investimentos</h3>
          <p className="text-muted mb-0">
            Descubra quanto seu dinheiro pode render com juros compostos
          </p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 col-md-6">
          <CapturaDados
            recebeDados={recebeDados}
            limparResultados={limparResultados}
          />
        </div>
        <div className="col-12 col-md-6">
          <ExibeDados
            valorFinal={valorFinal}
            totalInvestido={totalInvestido}
            numeroAportes={numeroAportes}
            jurosAcumulados={jurosAcumulados}
            rentabilidade={rentabilidade}
          />
        </div>
      </div>
      <HistoricoSimulacoes historico={historico} />
    </div>
  </div>
</div>
    
  )
}

export default App