import { useParams } from "react-router-dom"
import { useArtistEvents } from "../hooks/useArtistEvents"
import ArtistDataEvent from "./AristDataEvent"

function ArtistEvents() {

  const { name } = useParams()
  const { events, artist, loading, error } = useArtistEvents(name)

  if (error) {
    return <p>Error: {error}</p>
  }

  if (loading) {
    return <p className="loading">Cargando eventos de {name}...</p>
  }

  return (<ArtistDataEvent artist={artist} events={events} />)
}

export default ArtistEvents;
