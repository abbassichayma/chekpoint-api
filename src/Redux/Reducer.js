import { GETDATA } from '../Redux/ActionType'

const init = {
    movies: []
}

const moviesReducers = (state = init, action) => {
    switch (action.type) {
        case GETDATA:
            return {
                ...state,
                movies: action.payload
            }
            
        default: return state

    }
}
export default moviesReducers
   
// if(Object.keys(getMovie).length != 0 ){
//     myMovies = [...myMovies,{...getMovie,_id:Math.random()}]
// }