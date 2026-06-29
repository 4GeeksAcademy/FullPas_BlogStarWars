import { Link } from "react-router-dom";
import storeReducer from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand mb-0 h1">Star Wars Blog</span>

        <div className="dropdown">
          <button
            id="drowfav"
            aria-expanded="false"
            className="btn btn-primary"
            type="button"
            data-bs-toggle="dropdown"
          >
            FAVORITOS
            <span className="badge bg-dark text-danger rounded-pill px-2">
              {store.favoritos?.length || 0}
            </span>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end bg-dark border border-secondary p-2 mt-2 dropdown-menu-dark"
            aria-labelledby="dropdownFavorites"
          >
            {/* Contenido de la lista */}
			
          </ul>
        </div>
      </div>
    </nav>
  );
};
