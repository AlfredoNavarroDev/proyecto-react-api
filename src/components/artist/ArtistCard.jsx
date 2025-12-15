import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import LinksTabs from "./LinksTabs"

function ArtistCard({ artistName }) {

  const base_url = import.meta.env.VITE_BASE_URL_BANDSINTOWN
  const app_id = import.meta.env.VITE_APP_ID_BANDSINTOWN

  const [artistData, setArtistData] = useState(null)

  useEffect(() => {
    axios.get(`${base_url}${artistName}${app_id}`)
      .then(res => setArtistData(res.data))
      .catch(err => console.error("Error:", err))
  }, [artistName])

  if (!artistData) {
    return <p className="loading">Cargando {artistName}...</p>
  }

  return (
    <div className="card">
      <div className="header">
        <img
          className="cover"
          src={artistData.image_url}
          alt={artistData.name}
        />
        <h2>{artistData.name}</h2>
      </div>

      <h3 className="section-title">Redes</h3>
      <LinksTabs links={artistData.links} />

      {/* LINK A EVENTOS */}
      <Link
        to={`/artists/${artistData.name}/events`}
        className="events-btn"
      >
        Ver eventos
      </Link>
    </div>
  )
}

export default ArtistCard
