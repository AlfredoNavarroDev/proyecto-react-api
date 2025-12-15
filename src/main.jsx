import { createRoot } from 'react-dom/client'
import App from './components/App'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pagina404 from './components/404';
import ArtistDetail from './components/artist/ArtistDeatil';
import Cuadricula from './components/artist/Cuadricula';
import Home from './components/Home';
import ArtistEvents from './components/artist/ArtistEvents';

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <Routes>

                // Rutas que empiezan por "/"    
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path='/artists' element={<App />}>
                    <Route index element={<Cuadricula />} />
                    <Route path=':name' element={<ArtistDetail />} />
                    <Route path=':name/events' element={<ArtistEvents />} />
                </Route>
                
                // Cualquier otra ruta
                <Route path='*' element={<Pagina404 />} />
            
            </Routes>
        </BrowserRouter>
    </>
)

