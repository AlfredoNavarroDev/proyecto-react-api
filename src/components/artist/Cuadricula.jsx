import ArtistCard from "./ArtistCard";

function Cuadricula() {

  const artists = [
    "BoyWithUke",
    "LP",
    "Queen",
    "The Beatles"
  ]

  return (
    <div className="app">
      {artists.map((artist, index) => (
        <ArtistCard key={index} artistName={artist} />
      ))}
    </div>
  )
}

export default Cuadricula;
