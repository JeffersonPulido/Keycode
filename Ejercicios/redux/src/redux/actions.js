/** Objeto de js que contiene la informacion de que acciones se pueden hacer 
*   siempre contiene la siguiente estructura:
*   {type: 'Agregar_al_carrrito', payload: {INFORMACION DEL PRODUCTO A AGREGAR} }
*   ESTO DICE QUE ES LO QUE SE PUEDE HACER
*/


//Accion unica para agregar tareas
export const addTask = (task) => ({
    //Identificador de la funcion que puedo ejecutar
    type:'ADD_TASK',
    //Informacion para modificar el estado
    payload: task
})

//Accion unica para eliminar una tarea
export const deleteTask = (taskId) => ({
    type:'DELETE_TASK',
    payload: taskId
})

//Accion unica para modificar una tarea
export const updateTask = (task) => ({
    type:'UPDATE_TASK',
    payload: task
})