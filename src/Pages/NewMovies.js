import {useEffect, useState} from 'react'
import {Row, Col} from 'antd'
import {URL_API, API} from '../utils/constants'
import useFetch from '../hooks/useFetch'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

export default function NewMovies(){

    const [movieList, setMovieList] = useState([])
    const [page, setPage]= useState(1)

    useEffect(()=> {
        (async()=> {
            const response = await fetch(
                `${URL_API}/now_playing?api_key=${API}&lenguage=es-ES&page=${page}`
            )
            const movies = await response.json()
            console.log(movies);
            setMovieList(movies)
        })()
    },[page])


    return (
        <Row>
            <Col span={24} style ={{textAlign:"center", marginTop: 25}}>
                <h1 style={{fontSize:35, fontWeight: "bold"}}>Ultimos lanzamientos</h1>
            </Col>
            {movieList.results ?
            <Col span={24}>
                <h1>Todas las peliculas...</h1>
            </Col>
            :  <Col span={24}>
            <Loading/>
                </Col>}
            <Col span={24}>
                <Footer/>
            </Col>
        </Row>
    )
}