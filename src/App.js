import { getMovies } from './Redux/Action';
import './App.css';
import Movies from './component/Movies'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  const movieCard = async () => {
    try {
      const { data } = await axios.get('https://movie-app-gmc.herokuapp.com/api/movies')
      dispatch(getMovies(data))
    }
    catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    movieCard()
  }, [])

  return (
    <div className="App">
      <Movies />
    </div>
  );
}

export default App;
