/**
 * Este es el encargado de guardar la informacion global del state
 * ESTE CONTIENE LOS DATOS - INFO
 */

import { createStore } from 'redux'
import rootReducer from './rootReducer'


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store