import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  const favoritos = store.favoritos || [];

  const getFavoriteDetails = (favorito) => {
    const tipo = favorito?.type;
    const id = favorito?.id;

    if (tipo === "naves") {
      const nave = store.naves?.find((item) => String(item?.uid) === String(id));
      return {
        label: nave?.name || `Nave ${id}`,
        path: `/nave/${id}`,
      };
    }

    if (tipo === "personas") {
      const persona = store.personas?.find((item) => String(item?.uid) === String(id));
      return {
        label: persona?.name || `Persona ${id}`,
        path: `/persona/${id}`,
      };
    }

    if (tipo === "planetas") {
      const planeta = store.planetas?.find((item) => String(item?.uid) === String(id));
      return {
        label: planeta?.name || `Planeta ${id}`,
        path: `/planeta/${id}`,
      };
    }

    return {
      label: `Favorito ${id}`,
      path: "/",
    };
  };

  const eliminarFavorito = (favorito) => {
    dispatch({
      type: "quitar_favoritos",
      payload: favorito,
    });
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <span className="navbar-brand mb-0 h1">Star Wars Blog</span>

        <div className="dropdown ms-auto">
          <button
            id="dropdownFavorites"
            aria-expanded="false"
            className="btn btn-primary d-flex align-items-center gap-2"
            type="button"
            data-bs-toggle="dropdown"
          >
            <span>FAVORITOS</span>
            <span className="badge bg-light text-primary rounded-pill px-2 py-1">
              {favoritos.length}
            </span>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end p-2 mt-2 shadow-sm border-0"
            style={{ backgroundColor: "#fff", color: "#111" }}
            aria-labelledby="dropdownFavorites"
          >
            {favoritos.length === 0 ? (
              <li className="dropdown-item text-muted">No tienes favoritos aún</li>
            ) : (
              favoritos.map((favorito) => {
                const detalle = getFavoriteDetails(favorito);

                return (
                  <li
                    key={`${favorito.type}-${favorito.id}`}
                    className="d-flex align-items-center justify-content-between gap-2 px-2 py-1 border-bottom"
                    style={{ borderColor: "#e9ecef" }}
                  >
                    <Link to={detalle.path} className="text-dark text-decoration-none small flex-grow-1">
                      {detalle.label}
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm p-1 rounded-circle border-0"
                      style={{ backgroundColor: "#e9ecef", color: "#6c757d" }}
                      onClick={() => eliminarFavorito(favorito)}
                      aria-label={`Eliminar ${detalle.label}`}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
