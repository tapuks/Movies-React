import {Row, Col, Button} from 'antd'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import useFetch from '../../hooks/useFetch'
import { API, URL_API } from '../../utils/constants'
import Loading from '../../components/Loading'

import './Movie.scss'




export default function Movie(){
    const {id} = useParams()
    const movieInfo = useFetch(`${URL_API}/${id}?api_key=${API}&language=es-ES&page=1`)
    console.log(movieInfo);

    if (movieInfo.loading || !movieInfo.result) {
        return <Loading/>
    }

    return (
       
        <RenderMovie movieInfo={movieInfo.result}></RenderMovie>
    )
}

function RenderMovie(props) {
    const {movieInfo: {title}
    }= props


    return (
        <div>
            <h1>Estamos en la pelicula {title}</h1>
        </div>
    )

}