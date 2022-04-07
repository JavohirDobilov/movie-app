import React from 'react'
import "../MovieItem/movieItem.css"
import view from "../../img/move/view.png"
import { Movie } from '../../type'
import { motion } from 'framer-motion'




const MovieItem = ({item}:{item:Movie}) => {
    
  return (
    <motion.div layout className='movie'>
        <div className='movie-container'>
            <img src={"http://image.tmdb.org/t/p/w500" + item.backdrop_path}/>
            <div className='movie-lan-title'>
                <div className='movie-title'>
                    {item.title}
                </div>
                <div className='movie-lan'>
                    lang:{item.original_language}
                </div>
            </div>
            <div className='movie-view'>
                <div className='movie-see'>
                    <img src={view}/>
                </div>
                <div className='movie-view-rem'>
                    {item.popularity}
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default MovieItem