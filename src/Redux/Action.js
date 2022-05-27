import {GETDATA} from '../Redux/ActionType'

export const getMovies=(listMovies)=>{
    return{
        type:GETDATA,
        payload:listMovies
        
    }
}



