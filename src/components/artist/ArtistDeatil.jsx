import { useParams } from "react-router-dom"
import ArtistCard from "./ArtistCard";
import ArtistEvents from "./ArtistEvents";

function ArtistDetail() {
  const { name } = useParams()

  return (
    <div>
      <ArtistCard artistName={name}/>
    </div>
  )
}

export default ArtistDetail;
