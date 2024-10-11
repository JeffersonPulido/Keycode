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
      const filteredTasks = state.tasks.filter(task => task.id !== action.payload)
      localStorage.setItem('tasks', JSON.stringify(filteredTasks))
      return {...state, tasks: filteredTasks}
    case "UPDATE_TASK":
      const updatedTasks = state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      return {...state, tasks: updatedTasks}
    default:
        return state;
  }
};

export default reducer