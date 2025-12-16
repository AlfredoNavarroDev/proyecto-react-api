import { useEffect, useState } from "react"
import axios from "axios"

export function useArtistEvents(name) {
  const base_url = import.meta.env.VITE_BASE_URL_BANDSINTOWN
  const app_id = import.meta.env.VITE_APP_ID_BANDSINTOWN

  const [events, setEvents] = useState([])
  const [artist, setArtist] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!name) return

    setLoading(true)

    axios
      .get(`${base_url}${name}/events${app_id}&date=all`)
      .then(res => {
        setEvents(res.data)
        setArtist(res.data[0]?.artist || null)
      })
      .catch(err => {
        console.error(err)
        setError("Error al cargar eventos")
      })
      .finally(() => setLoading(false))
  }, [name])

  return { events, artist, loading, error }
}