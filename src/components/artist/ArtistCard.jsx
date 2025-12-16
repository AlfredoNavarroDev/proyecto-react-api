import { Link } from "react-router-dom"
import LinksTabs from "./LinksTabs"
import usePetition from "../hooks/usePetition"

function ArtistCard({ artistName }) {

  const artistData = usePetition(`${artistName}`)

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
