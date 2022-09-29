import { useState } from 'react'
import './App.css'

//Importação de Componentes
import { Formulario } from './Components/Form/'
import { Tabela } from './Components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Formulario />
      <Tabela />
    </div>
  )
}

export default App
