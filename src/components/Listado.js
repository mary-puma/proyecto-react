import { useState } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Buscador from './Buscador';
import '../css/app.css'

function Listado({ addOrRemoveFromFav }) {
    
    let token = localStorage.getItem('token');

    const [movieList, setMovieList] = useState([]);
    let [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get("keyword"));

    useEffect(() => {

        //console.log(searchParams.get("keyword"));

        let key = searchParams.get("keyword")
        if (key === null)
            key = 'batman'
        const endpoint = `https://omdbapi.com/?apikey=7a5b7d31&s=${key}`;
        axios.get(endpoint)
            .then(response => {
                const apiData = response.data;
                setMovieList(apiData.Search);//Search atributo donde estan las peliculas
            })
            .catch(error => {
                console.log(error);
            }
            )

    }, [searchParams]);

    console.log(movieList);


    if (token === null)
        return <Navigate to='/' />


    return (
        <>
            <Buscador />
            <div className="row">
                {
                    movieList.map((oneMovie, idx) => {
                        return (
                            <div className="col-3" key={idx}>
                                <div className='card my-4'>
                                    <img src={oneMovie.Poster} className="card-img-top" alt="..." rel="noreferrer noopener" />
                                    <button className='favourite-btn' onClick={addOrRemoveFromFav} data-movie-id={oneMovie.imdbID}>
                                        ❤️
                                    </button>
                                    <div className="card-body">
                                        <h5 className="card-title">{oneMovie.Title}</h5>
                                        <p className="card-text">{oneMovie.Type}</p>
                                        <p className="card-text">{oneMovie.Year}</p>
                                        <Link href="/" className="btn btn-primary">Detalle</Link>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Listado;