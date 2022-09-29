import { useState } from 'react'
import './App.css'

//importação de Componentes
import { Formulario } from './Components/Form/'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Formulario />
    </div>
  )
}

export default App
