import { useState } from 'react'
import sena from './assets/sena.png'
import './App.css'
import Saludo from './components/saludo'; // Importa el componente

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank">
          <img src={sena} className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1>Mi primera app con Vite y React</h1>

      <div>
    {/* Usa el componente como una etiqueta HTML */}
    <Saludo nombre="Jesus Silva" />
    </div>

      <div className="card">
          <p>El contador esta en: {count}</p>
        <button onClick={() => setCount((count) => count - 1)}>Decrementar</button> 
        <button onClick={() => setCount((count) => count + 1)}>Incementar</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
