import CapturaDados from "./CapturaDados"
import { useState } from 'react'
import ExibeDados from "./ExibeDados"

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
  

  setValorFinal(' R$' + montante.toFixed(2))
  setTotalInvestido(' R$' + totalInvestidoCalculado.toFixed(2))
  setNumeroAportes(pe)
  setJurosAcumulados(' R$' + juros.toFixed(2))
  setRentabilidade(' +' + rent.toFixed(2) + '%')

  const novaSimulacao = {
  data: new Date().toLocaleString("pt-BR"),
  valor: 'R$ ' + montante.toFixed(2)
}
setHistorico([...historico, novaSimulacao])
}

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
           <CapturaDados
             recebeDados={recebeDados}
             limparResultados={limparResultados}/>
            <ExibeDados
            valorFinal={valorFinal}
            totalInvestido={totalInvestido}
            numeroAportes={numeroAportes}
            jurosAcumulados={jurosAcumulados}
            rentabilidade={rentabilidade}
          />    
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <h4>Histórico de simulações</h4>
            {historico.map((item, index) => (
              <p key={index}>
                {item.valor} - {item.data}
              </p>
            ))}
          </div>
        </div>
          </div>
    
  )
}

export default App