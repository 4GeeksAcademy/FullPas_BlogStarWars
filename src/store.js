export const initialStore = () => {
  return {
    naves: [],
    planetas: [],
    personas: [],
    favoritos: [],
  };
};

export default function storeReducer(store, action = {}) {
  //Action.type es la accion que vas ha hacer (añadir o quitar tarea, por ejemplo, pero no das informacion d elo que vas ha hacer)
  switch (action.type) {
    case "load_data": {
      const { nuevasPersonas, nuevasNaves, nuevosPlanetas } = action.payload; //es la informacion que tu das para que se haga lo que haya en el case, por ejemplo un ID, que te permitirá hacer "algo"
      return {
        ...store,
        personas: nuevasPersonas,
        naves: nuevasNaves,
        planetas: nuevosPlanetas,
      };
    }

    case "agregar_favoritos": {
      const esFavorito = store.favoritos.some(
        fav => String(fav) === String(action.payload)
      );
      console.log(store.favoritos);
      console.log(action.payload);
      
      
      if (esFavorito) {
        // Ya existe, no agregarlo
        return store;
      } else {
        // No existe, agregarlo
        return {
          ...store,
          favoritos: [...store.favoritos, action.payload]
        };
      }
    }

    case "quitar_favoritos": {
      return {
        ...store,
        favoritos: store.favoritos.filter(fav => fav != action.payload),
      };
    }

    case "change_message":
      const { nuevoMessage } = action.payload;
      return {
        ...store,
        message: nuevoMessage,
      };

    default:
      throw Error("Unknown action.");
  }
}
