import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className="home">
      <div className="home-card">

        <h1 className="home-title">
          Bienvenido a <span>DataSinger</span>
        </h1>

        <p className="home-subtitle">
          Descubre información, redes sociales y próximos conciertos
          de tus artistas favoritos en un solo lugar.
        </p>

        <Link to="/artists" className="home-btn">
          Ver artistas
        </Link>

      </div>
    </section>
  )
}

export default Home
