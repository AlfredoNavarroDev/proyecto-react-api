function ArtistDataEvent({ artist, events }) {
  return (
    <div className="card">
      <img
        className="cover"
        src={artist.image_url}
        alt={artist.name}
      />

      <h2>{artist.name}</h2>

      <h3 className="section-title">Conciertos</h3>

      {events.length === 0 ? (
        <p className="muted">No hay eventos disponibles.</p>
      ) : (
        <ul className="events">
          {events.map(event => (
            <li key={event.id} className="event-item">
              <div>
                <strong>{event.venue.name}</strong>
                <p>{event.venue.city}, {event.venue.country}</p>
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

export default ArtistDataEvent;
