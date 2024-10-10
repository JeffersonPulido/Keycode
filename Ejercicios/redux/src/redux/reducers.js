/** Funcion de js que ejecuta la modificacion al state unicamente de las actiones existentes
 * Recibe dos cosas siempre (state = Estado actual, action = Que es lo que quiero hacer)
 * ESTE DICE COMO SE PUEDE HACER LAS ACTIONS
 */

/**
 * const a = [1, 2, 3]
 *  const b = [4 ,5 ,6]
 * const c = [...a, b]
 * const c =[1, 2, 3, 4 ,5 ,6]
 *   const task = ['sacar al perro', 'lavar la loza']
 *   const newTask = [...task, 'comprar helado']
 *   const task = ['sacar al perro', 'lavar la loza', 'comprar helado']
 */

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) ?? [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(newTask));
      return { ...state, tasks: newTask };
    case "DELETE_TASK":
      break;
    case "UPDATE_TASK":
      break;
    default:
        return state;
  }
};

export default reducer