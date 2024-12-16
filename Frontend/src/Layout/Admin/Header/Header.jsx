import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import RGAdminLogo from "../../../assets/img/RokstarGames__adminLogo.png"
const Header = () => {
  
  return (
    <div className='admin-sidebar'>
      <div class="page-wrapper toggled">
  
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <Link to><img src={RGAdminLogo} style={{width:"30%"}} alt="" /></Link>
        
      </div>
      
      
      {/* <!-- sidebar-search  --> */}
      <div class="sidebar-menu">
        <ul>
          <li class="header-menu">
            <span>General</span>
          </li>
          <li class="sidebar-dropdown">
            <Link to="magazine">
              <i class="fa fa-shopping-cart"></i>
              <span>Magazine</span>
            </Link>
          </li>
          <li class="sidebar-dropdown">
            <Link to="newswire">
            <i class="fa-brands fa-neos"></i>
              <span>Newswire</span>
            </Link>

          </li>

          
          <li class="header-menu">
            <span>Add</span>
          </li>
          <li>
            <Link to="addgames">
            <i class="fa-solid fa-gamepad"></i>
              <span>Add Games</span>
            </Link>
          </li>
          <li>
            <Link to="addproducts">
              <i class="fa fa-book"></i>
              <span>Add Products</span>
            </Link>
          </li>
          <li>
            <Link to="addnews">
              <i class="fa fa-calendar"></i>
              <span>Add News</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- sidebar-menu  --> */}
    </div>
    {/* <!-- sidebar-content  --> */}
    
  </nav>
  {/* sidebar-wrapper */}
  
  {/* <!-- page-content" --> */}
</div>
    </div>
  )
}

export default Header
