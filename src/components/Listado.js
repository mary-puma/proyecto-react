import { useState } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Buscador from './Buscador';

function Listado() {

    /*const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token === null) {
            navigate('/');
        }
    }, [navigate]);*/


    let token = localStorage.getItem('token');

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const endpoint = 'https://omdbapi.com/?i=tt3896198&apikey=7a5b7d31&s=batman'
        axios.get(endpoint)
            .then(response => {
                const apiData = response.data;
                setMovieList(apiData.Search);//Search atributo donde estan las peliculas
            })
    }, [setMovieList]);

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
                                    <img src={oneMovie.Poster} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{oneMovie.Title}</h5>
                                        <p className="card-text">{oneMovie.Type}</p>
                                        <p className="card-text">{oneMovie.Year}</p>
                                        <Link href="/" className="btn btn-primary">Go somewhere</Link>

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