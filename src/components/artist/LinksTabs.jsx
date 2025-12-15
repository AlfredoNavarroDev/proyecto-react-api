import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGlobe
} from "react-icons/fa";

function LinksTabs({ links }) {

  if (!links || links.length === 0) {
    return <p>No hay enlaces disponibles</p>
  }

  // Mapa tipo -> icono
  const getIconByType = (type) => {
    switch (type?.toLowerCase()) {
      case "spotify":
        return <FaSpotify />
      case "youtube":
        return <FaYoutube />
      case "instagram":
        return <FaInstagram />
      case "facebook":
        return <FaFacebook />
      case "twitter":
      case "x":
        return <FaTwitter />
      default:
        return <FaGlobe />
    }
  }

  return (
    <ul className="links">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              {getIconByType(link.type)}
            </span>
            <span className="text">
              {link.type}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default LinksTabs;
