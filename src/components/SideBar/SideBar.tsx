import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../SideBar/sideBar.css"
import menuIcon from "../../img/sidebar/apps.png"
import chatIcon from "../../img/sidebar/chat1.png"
import userIcon from "../../img/sidebar/user.png"
import bookmakerIcon from "../../img/sidebar/bookmark.png"
import settingIcon from "../../img/sidebar/setting.png"

const SideBar = () => {


const [menu, setMenu] = useState(1)
  return (
    <div className='sidebar'>
        <div className='sidebar-menu'>
                 <div onClick={()=>setMenu(1)} className = {(menu ===1 && "active") + (" menu-link-item")}>
                     <Link to="/"><img src={menuIcon}></img></Link>
                 </div>
                 <div onClick={()=>setMenu(2)} className = {(menu ===2 && "active")+(" menu-link-item")}>
                     <Link to="/account"><img src={userIcon}></img></Link>
                 </div>
                 <div onClick={()=>setMenu(3)} className = {(menu ===3 && "active")+(" menu-link-item")}>
                     <Link to="/"><img src={chatIcon}></img></Link>
                 </div>
                 <div onClick={()=>setMenu(4)} className = {(menu ===4 && "active")+(" menu-link-item")}>
                     <Link to="/"><img src={bookmakerIcon}></img></Link>
                 </div>
                 <div onClick={()=>setMenu(5)} className = {(menu ===5 && "active")+(" menu-link-item")}>
                     <Link to="/"><img src={settingIcon}></img></Link>
                 </div>
        </div>
    </div>
  )
}

export default SideBar