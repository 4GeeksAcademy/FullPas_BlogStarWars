//import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { CardNave } from "../components/CardNave.jsx";
import { CardPlanet } from "../components/CardPlanet.jsx";
import { CardPersona } from "../components/CardPersona.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
  async function getData() {
    const [resNaves, resPlanetas, resPersonas] = await Promise.all([
      fetch("https://www.swapi.tech/api/starships"),
      fetch("https://www.swapi.tech/api/planets"),
      fetch("https://www.swapi.tech/api/people")
    ]);

    const [naves, planetas, personas] = await Promise.all([
      resNaves.json(),
      resPlanetas.json(),
      resPersonas.json()
    ]);

    dispatch({
      type: "load_data",
      payload: {
        nuevasNaves: naves.results,
        nuevosPlanetas: planetas.results,
        nuevasPersonas: personas.results,
      },
    });
  }

  getData();
}, []);

  return (
    <>
      <div>
        <div className="text-center bg-secondary-subtle text-dark w-100">
          <div className="container-fluid px-4 py-2">
            <h1 className="text-body-emphasis">STARSHIPS</h1>
            <div className="col-lg-12 mx-auto lead">
              <div className="text-center mt-5">
                <div className="row flex-row flex-nowrap overflow-scroll">
                  {store.naves.map((nave, index) => (
                    <CardNave uid={nave.uid} key={index} name={nave.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white" style={{ height: "24px", width: "100%" }}></div>
      <div>
        <div className="text-center bg-secondary-subtle text-dark w-100">
          <div className="container-fluid px-4 py-2">
            
            <h1 className="text-body-emphasis">PLANETS</h1>
            <div className="col-lg-12 mx-auto lead">
              <div className="text-center mt-5">
                <div className="row flex-row flex-nowrap overflow-scroll">
                 {store.planetas.map((planeta, index) => (
                    <CardPlanet
                      uid={planeta.uid}
                      key={index}
                      name={planeta.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white" style={{ height: "24px", width: "100%" }}></div>
      <div>
        <div className="text-center bg-secondary-subtle text-dark w-100">
          <div className="container-fluid px-4 py-2">
            <h1 className="text-body-emphasis">PEOPLE</h1>
            <div className="col-lg-12 mx-auto lead">
              <div className="text-center mt-5">
                <div className="row flex-row flex-nowrap overflow-scroll">
                  {store.personas.map((persona, index) => (
                    <CardPersona
                      uid={persona.uid}
                      key={index}
                      name={persona.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
