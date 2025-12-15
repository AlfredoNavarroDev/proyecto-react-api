import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function ArtistEvents() {

  const { name } = useParams()
  const base_url = import.meta.env.VITE_BASE_URL_BANDSINTOWN
  const app_id = import.meta.env.VITE_APP_ID_BANDSINTOWN

  const [events, setEvents] = useState([])
  const [artist, setArtist] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    axios.get(`${base_url}${name}/events${app_id}&date=all`)
      .then(res => {
        setEvents(res.data)

        if (res.data.length > 0) {
          setArtist(res.data[0].artist)
        } else {
          setArtist({ name }) // fallback si no hay eventos
        }
      })
      .catch(err => console.error("Error:", err))
      .finally(() => setLoading(false))

  }, [name])

  if (loading) {
    return <p className="loading">Cargando eventos de {name}...</p>
  }


  return (
    <div className="card">

      <h2>{artist.name}</h2>

      <h3 className="section-title">Próximos conciertos</h3>

      {events.length === 0 ? (
        <p className="muted">No hay eventos disponibles.</p>
      ) : (
        <ul className="events">
          {events.map(event => (
            <li key={event.id} className="event-item">
              <div>
                <strong>{event.venue.name}</strong>
                <p>
                  {event.venue.city}, {event.venue.country}
                </p>
                <p>
                  {new Date(event.datetime).toLocaleDateString()}
                </p>
              </div>

              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver evento
              </a>
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default ArtistEvents