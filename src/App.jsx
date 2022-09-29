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

  return (
    <div className="App">
      <Formulario 
      btnCadastrar={btnCadastrar} 
      setNome={setNome} 
      setIdade={setIdade}
      setCidade={setCidade}
       />
      <Tabela />
    </div>
  )
}

export default App
