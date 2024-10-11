import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './redux/store';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Expande o esparce el state a toda la app */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
