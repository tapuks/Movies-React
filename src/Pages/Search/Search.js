import { useState, useEffect } from 'react'
import {Col, Row, Input} from 'antd'
import { useRoutes } from 'react-router-dom';
// import queryString from 'query-string'
// import MovieCatalog from '../../components/MovieCatalog'
// import Footer from '../../components/Footer'
// import {URL_API, API} from '../../utils/constants'

import './Search.scss'



 export default function Search(props){
     const routes = useRoutes()
    //  console.log(routes);

    const {movieList, setMovielist} = useState([])
    const {searchValue, setSearchValue} = useState("")

    // useEffect(()=> {},[routes])



    return (
        <h1>Buscador search</h1>
    )
}

