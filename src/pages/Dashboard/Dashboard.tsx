import React, { useEffect, useState } from 'react'
import FilterMenu from '../../components/FilterMenuItem/FilterMenu'
import MovieItem from '../../components/MovieItem/MovieItem'
import movie1 from "../../img/move/movie1.jpg"
import { Movie } from '../../type'
import {motion} from "framer-motion"
import "../Dashboard/dashboard.css"





const Dashboard = () => {



  const [popular, setPopular] = useState([] as Movie[]);

  const [filtered,setFiltered] = useState([] as Movie[]);
  
  const [activeGenre, setActiveGenre] = useState(0);





  const fetchPopular = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bd71804e6fd6a9d30880a89b0bfe4db8&language=en-US&page=13`);
    const movies = await data.json();
    console.log(movies)
    setPopular(movies.results);
    setFiltered(movies.results);
  }



 

  useEffect(() => {
    fetchPopular();

  }, [])

  useEffect(()=>{
    if(activeGenre === 0){
      setFiltered(popular)
      return;
    }
    const filterlangan = popular.filter((movie)=>movie.genre_ids.includes(activeGenre));
    setFiltered(filterlangan);
  },[activeGenre])
  




  return (
    <div className='dashboard'>
      <div className='dashboard-content'>
        <div className='dashboard-filter'>
          <FilterMenu setActiveGenre = {setActiveGenre} activeGenre = {activeGenre} />
        </div>
        <motion.div layout className='dashboard-right'>
          {filtered.map(item => (
            <div className='movie-content-box' key={item.id}>
              <MovieItem item={item} />
            </div>
          ))}

        </motion.div>

      </div>
    </div>
  )
}

export default Dashboard