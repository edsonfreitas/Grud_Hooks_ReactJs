//Importação do React e dos Hooks 
import React, { useState } from "react";
import './App.css'

//Importação de Componentes
import { Formulario } from './Components/Form/'
import { Tabela } from './Components/Table'

function App() {

  //useState
  const [indiceVetor, setIndiceVetor] = useState('')
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
    //Limpar campos dos Inpts
    setNome('');
    setIdade('');
    setCidade('');
  }

  //Função Seleciona Usuario
   const selecionar = (indice) => {
    setIndiceVetor(indice)

    setNome(vetor[indice].nome)
    setIdade(vetor[indice].idade)
    setCidade(vetor[indice].cidade)
    
    setBtnCadastrar(false)

   }

  return (
    <div className="App">
      <Formulario 
      btnCadastrar={btnCadastrar} 
      setNome={setNome} 
      nome={nome}
      setIdade={setIdade}
      idade={idade}
      setCidade={setCidade}
      cidade={cidade}
      cadastrar={cadastrar}
       />
      <Tabela vetor={vetor} selecionar={selecionar} />
    </div>
  )
}

export default App
