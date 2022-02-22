import useFetch from "../hooks/useFetch"
import SliderMovies from "../components/SliderMovies";
import {URL_API, API} from '../utils/constants'
import MovieList from "../components/MovieList";
import {Row, Col} from 'antd'
import Footer from "../components/Footer";


export default function Home(){

    const newMovies = useFetch(`${URL_API}/now_playing?api_key=${API}&language=es-ES&page=1`)
    const popularMovies = useFetch(`${URL_API}/popular?api_key=${API}&language=es-ES&page=1`)
    const topRatedMovies = useFetch(`${URL_API}/top_rated?api_key=${API}&language=es-ES&page=1`)


    return (
        <>
        <SliderMovies movies={newMovies}/>
        <Row>
            <Col xs={12}><MovieList title='Peliculas populares' movies={popularMovies}/></Col>
            <Col xs={12}><MovieList title='Top mejores peliculas puntuadas' movies={topRatedMovies}/></Col>
        </Row>
        <Footer/>
        </>
        
        
    )
}