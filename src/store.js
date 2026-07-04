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
      const favorito = typeof action.payload === "string"
        ? { type: "general", id: action.payload }
        : action.payload;

      const esFavorito = store.favoritos.some(
        fav => String(fav?.type) === String(favorito?.type) && String(fav?.id) === String(favorito?.id)
      );

      if (esFavorito) {
        return store;
      }

      return {
        ...store,
        favoritos: [...store.favoritos, favorito],
      };
    }

    case "quitar_favoritos": {
      const favorito = typeof action.payload === "string"
        ? { type: "general", id: action.payload }
        : action.payload;

      return {
        ...store,
        favoritos: store.favoritos.filter(
          fav => !(String(fav?.type) === String(favorito?.type) && String(fav?.id) === String(favorito?.id))
        ),
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
