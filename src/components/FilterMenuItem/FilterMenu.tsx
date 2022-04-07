import React from 'react'
import "../FilterMenuItem/filterMenu.css"

interface SetActive{
  setActiveGenre:React.Dispatch<React.SetStateAction<number>>
  activeGenre:number;
}

const FilterMenu = ({setActiveGenre,activeGenre}:SetActive) => {
  
  return (
    <div className='filterMenu'>

      <div onClick={()=>setActiveGenre(0)} className={(activeGenre ===0 && 'active') + ' filter-menu-container'}>
        <div className='filter-menu-container-drop'>
          All
        </div>
      </div>
      <div onClick ={()=>setActiveGenre(35)} className={(activeGenre===35 && 'active') + ' filter-menu-container'}>
        <div className='filter-menu-container-drop'>
          Comedy
        </div>
      </div>
      <div onClick={()=>setActiveGenre(18)}  className={(activeGenre===18 && 'active') + ' filter-menu-container'}>
        <div className='filter-menu-container-drop'>
          Drama
        </div>
      </div>
      <div onClick={()=>setActiveGenre(14)} className={(activeGenre===14 && 'active') + ' filter-menu-container'}>
        <div className='filter-menu-container-drop'>
          Fantasy

        </div>
      </div>
      <div onClick={()=>setActiveGenre(80)} className={(activeGenre===80 && 'active') + ' filter-menu-container'}>
        <div className='filter-menu-container-drop'>
          Creminal
        </div>
      </div>


    </div>
  )
}

export default FilterMenu