import {Types} from '../actions/contadorActions'

//** Valor inicial del state.contador */
export const valorInicial = { contador: 0 }
//** Constante numerica para sumar y restar */
export const valor = 1

//** Funcione que ejecuta por medio de un switch las diferentes posibles Actions */
//** Esta funcion me da un state y una action para ejecutar mis Actions */
export function contadorReducer(state, action) {
    /** Dependiendo del action.type ejecuta una u otra actions */
    switch (action.type) {
        case Types.INCREMENTAR:
            /** Si se elije la action en cuestion, ejecuta lo que esta en el retorno */
            /** En esta caso, modifica el valor de contador, agregandole al valor actual del estado + 1 */
            return { contador: state.contador + 1 }
        case Types.DECREMENTAR:
            return { contador: state.contador - valor }
        case Types.INCREMENTAR5:
            /** Si elije la funcion INCREMENTAR5, modifica el valor actual del mismo estado, pero
             * no le incrementa un valor quemado en una constante, sino, dinamicamente usa el valor que puse
             * en la variable llamada payload
             */
            return { contador: state.contador + action.payload }
        case Types.DECREMENTAR5:
            return { contador: state.contador - action.payload }
        case Types.RESET:
            return valorInicial
        default:
            return state;
    }
}