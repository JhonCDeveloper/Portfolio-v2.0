import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // Importa HashRouter
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* Envuelve App con HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
)