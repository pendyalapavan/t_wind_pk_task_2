import React from 'react';
import './Navbar.css';
import logo from './logo.png'

    const Navbar = () => {
      return (
        <nav className="navbar">
          <div className="navbar-left">
            <div className="logo"><img src={logo} alt="logo" height="20px" width="30px"/></div>
            <div className="brand"><b>T-Wind</b></div>
            <ul className="nav-items">
              <li className="nav-item">
                <span className="nav-icon"></span> Dashboards
                <ul className="dropdown">
                  <li>Dashboard 1</li>
                  <li>Dashboard 2</li>
                  <li>Dashboard 3</li>
                </ul>
                
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                  </svg>
              </li>
              
              
              <li className="nav-item">
                <span className="nav-icon"></span> Apps
                <ul className="dropdown">
                  <li>App 1</li>
                  <li>App 2</li>
                  <li>App 3</li>
                </ul>
               
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                  </svg>
              </li>
            
              <li className="nav-item">
                <span className="nav-icon"></span> UIkit
                <ul className="dropdown">
                  <li>UI Kit 1</li>
                  <li>UI Kit 2</li>
                  <li>UI Kit 3</li>
                </ul>
              
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                </svg>
              </li> 
      
              <li className="nav-item">
                <span className="nav-icon"></span> Pages
                <ul className="dropdown">
                  <li>Page 1</li>
                  <li>Page 2</li>
                  <li>Page 3</li>
                </ul>
               
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                </svg>
              </li>

              <li className="nav-item">
                
                <span className="nav-icon"></span> Authentication
                <ul className="dropdown">
                  <li>Auth 1</li>
                  <li>Auth 2</li>
                  <li>Auth 3</li>
                </ul>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                </svg>
              </li>  
              
            </ul>
          </div>
          <div className="navbar-right">
            <div className="search">
              <input type="text" placeholder="Search" />
              <span className="search-icon">🔍</span>
            </div>
            <div className="theme-icon">🌙</div>
            <div className="notifications-icon">🔔</div>
            <div className="user">
                <div className="user-icon">👤</div>
              <div className="user-info">
                <div className="user-name">John</div>
                <div className="user-role">Admin</div>
              </div>
              
            </div>
          </div>
        </nav>
      );
    };
    
    export default Navbar;
