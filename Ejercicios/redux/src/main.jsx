import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Expande o esparce el state a toda la app */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
