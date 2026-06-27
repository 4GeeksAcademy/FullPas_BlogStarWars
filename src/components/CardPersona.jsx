import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const CardPersona = (props) => {
    const { store, dispatch } = useGlobalReducer()
    
    
    return (

        <div className="card mx-2 h-100" style={{ width: "15.6rem", minHeight: "15rem" }}>
            {/* Mirar codigo comentado y analizar si es necesario dejarlo aca */}
                {/* <img src={props.img} className="card-img-top mt-3" alt="..." style={{ width: "224px", height: "126px", objectFit: "cover" }} /> */}
                <img 
                src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${props.uid}.jpg?raw=true`}
                className="card-img-top mt-3" 
                style={{ width: "224px", height: "126px", objectFit: "cover" }} 
                loading = "lazy"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div style={{ minHeight: "80px" }}>
                        <h5 className="card-title" style={{ fontSize: "1rem" }}>{props.name}</h5>
                    </div>
                    <div className="d-flex flex-column gap-2 mt-auto">
                        <Link to={'persona/' + props.uid} className="btn btn-primary btn-sm"> Ver persona </Link>
                        <button className="btn btn-sm" onClick={()=>dispatch(
                        {
                            type:'change_message',
                            payload:{nuevoMessage: 'Nuevo mensaje en contexto' }
                        }
                    )}
                    
                    > Cambiar Mensaje</button>
                    </div>
                </div>
            </div>
    );
};