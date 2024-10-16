const initialState = {
    users: JSON.parse(localStorage.getItem("users")) ?? []
}

const userReducer = (state = initialState, action) => {
    //Funcion switch que ejecuta un bloque de codigo dependiendo las actions.types definidas en el archivo actions.js
    switch (action.type) {
        case 'ADD_USER':
            //Creo la constante newUser y le asigno la copia de los usuarios + el nuevo usuario
            const newUser = [...state.users, action.payload]
            //Guarda la constante que creamos antes en formato JSON en el localStorage
            localStorage.setItem("users", JSON.stringify(newUser))
            //Regresa/Guarda el state anterior + el nuevo usuario
            return {
                ...state,
                users: newUser
            }
        case 'UPDATE_USER':
            //Creamos la constante updatedUser y le asignamos el usuario que coincida exactamente su id con el id que le paso
            const updatedUser =  state.users.map(user => user.id === action.payload.id ? action.payload : user)
            localStorage.setItem("users", JSON.stringify(updatedUser))
            return {
                ...state,
                users: updatedUser
            }
        case 'DELETE_USER':
            //Creamos la constante updatedUsers y guardamos todos los demas usuarios menos el que coincida  exactamente su id con el id que le paso
            const updatedUsers = state.users.filter(user => user.id !== action.payload)
            localStorage.setItem("users", JSON.stringify(updatedUsers))
            return {
                ...state,
                users: updatedUsers
            }
        default:
            return state;
    }
}

export default userReducer