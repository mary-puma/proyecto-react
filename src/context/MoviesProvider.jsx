import { useMovies } from "../hooks/useMovies";
import { MoviesContext } from "./MoviesContext"

export const MoviesProvider = ({children}) => {

    const {
        addOrRemoveFromFav,
        favorites,
    } = useMovies();

    return (
        <MoviesContext.Provider value={
            {
                addOrRemoveFromFav,
                favorites,
            }
        }>
            {children}
        </MoviesContext.Provider>
    )
}