/**
 * Este es el encargado de guardar la informacion global del state
 * ESTE CONTIENE LOS DATOS - INFO
 */

import { createStore } from 'redux'
import reducer from './reducers' 

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store