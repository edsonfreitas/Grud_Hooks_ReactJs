//Importação do React e dos Hooks 
import React, { useState } from "react";
import './App.css'

//Importação de Componentes
import { Formulario } from './Components/Form/'
import { Tabela } from './Components/Table'

function App() {

  //useState
  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [cidade, setCidade] = useState('')
  const [vetor, setVetor] = useState([])

  //Função Cadastrar
  const cadastrar = () => {
    let obj = {'nome':nome, 'idade':idade, 'cidade':cidade}
    //Adicionar ao Vetor
    setVetor([...vetor, obj]);
  }

  return (
    <div className="App">
      <Formulario 
      btnCadastrar={btnCadastrar} 
      setNome={setNome} 
      setIdade={setIdade}
      setCidade={setCidade}
      cadastrar={cadastrar}
       />
      <Tabela vetor={vetor} />
    </div>
  )
}

export default App
