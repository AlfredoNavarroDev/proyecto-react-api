import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const base_url= import.meta.env.VITE_BASE_URL_BANDSINTOWN
  const app_id= import.meta.env.VITE_APP_ID_BANDSINTOWN
  const [artistData, setArtistData] = useState()

  useEffect(() => {
    axios.get(`${base_url}BoyWithUke${app_id}`)
    .then(data => {
      console.log(data)
      setArtistData(data.data)
    })
    .catch((error) => {console.error("la petición ha fallado: " + error)})
  }, [])

  if (!artistData) return <p className="loading">Cargando...</p>

  return (
    <div className="app">
      <div className="card">
        <div className="header">
          <img className="cover" src={artistData.image_url} alt={artistData.name} />
          <h2>{artistData.name}</h2>
        </div>

        <h3 className="section-title">Redes</h3>

        <ul className="links">
          {artistData.links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.type}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App