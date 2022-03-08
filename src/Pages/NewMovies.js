import {useEffect, useState} from 'react'
import {Row, Col} from 'antd'
import {URL_API, API} from '../utils/constants'
import useFetch from '../hooks/useFetch'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import MovieCatalog from '../components/MovieCatalog/MovieCatalog'
import PaginationMovies from '../components/Pagination'
export default function NewMovies(){

    const [movieList, setMovieList] = useState([])
    const [page, setPage]= useState(1)

    useEffect(()=> {
        (async()=> {
            const response = await fetch(
                `${URL_API}/now_playing?api_key=${API}&lenguage=es-ES&page=${page}`
            )
            const movies = await response.json()
            setMovieList(movies)
        })()
    },[page])

    const onChangePage =(page)=> {
        setPage(page)
    }


    return (
        <Row>
            <Col span={24} style ={{textAlign:"center", marginTop: 25}}>
                <h1 style={{fontSize:35, fontWeight: "bold"}}>Ultimos lanzamientos</h1>
            </Col>
            {movieList.results ?
           <>
                <Col span={24}>
                    <Row><MovieCatalog movies={movieList}/></Row>
                </Col>
                <Col span={24}>
                    <PaginationMovies
                        currentPage={movieList.page}
                        totalItems = {movieList.total_results}
                        onChangePage= {onChangePage}
                     />
                </Col>
            </>
            
            :  <Col span={24}>
            <Loading/>
                </Col>}




            <Col span={24}>
                <Footer/>
            </Col>
        </Row>
    )
}