import { Link, Navigate } from "react-router-dom";
function Favoritos({favorites,addOrRemoveFromFav}) {

    /*const [favorites, setFavorites] = useState([]);
    useEffect(()=>{
        const favsInLocal = localStorage.getItem('favs');

        if(favsInLocal !== null){
            const favsArray = JSON.parse(favsInLocal);
            console.log(favsArray);
            setFavorites(favsArray);
        }
    },[])*/
    let token = localStorage.getItem('token');
    if (token === null)
        return <Navigate to='/' />
    return (
        <>
            <h5>Seccion Favoritos</h5>
            <div className="row">
                {
                    favorites.map((oneMovie, idx) => {
                        return (
                            <div className="col-3" key={idx}>
                                <div className='card my-4'>
                                    <img src={oneMovie.imgUrl} className="card-img-top" alt="..." />
                                    <button className='favourite-btn' onClick={addOrRemoveFromFav} data-movie-id={oneMovie.id}>
                                        ❤️
                                    </button>
                                    <div className="card-body">
                                        <h5 className="card-title">{oneMovie.title}</h5>
                                        <p className="card-text">{oneMovie.overview}</p>

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
export default Favoritos;