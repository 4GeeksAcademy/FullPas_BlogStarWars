export const initialStore = () => {
  return {
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    naves: [],
    planetas: [],
    personas: [],
    message: 'un mensaje en contexto'
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    //FUNCION PARA TRAER DATOS DE LA API AL ESTORAGE
    // case 'Load_starships':
    //   const { nuevasNaves } = action.payload
    //   return {
    //     ...store,
    //     naves: nuevasNaves
    //   };

    // case 'Load_planets':
    //   const { nuevosPlanetas } = action.payload
    //   return {
    //     ...store,
    //     planetas: nuevosPlanetas
    //   };
    // case 'Load_people':
    //   const { nuevasPersonas } = action.payload
    //   return {
    //     ...store,
    //     personas: nuevasPersonas
    //   };

    case "load_data": {
      const { nuevasPersonas, nuevasNaves, nuevosPlanetas } = action.payload
       return {
        ...store,
        personas: nuevasPersonas,
        naves: nuevasNaves,
        planetas: nuevosPlanetas
      };
    }

    case 'change_message':
      const { nuevoMessage } = action.payload
      return {
        ...store,
        message: nuevoMessage
      };

    default:
      throw Error('Unknown action.');
  }
}
