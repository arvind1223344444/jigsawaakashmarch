import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../Navbar/Navbar.css';
import logo from '../../Images/logo.png';
import ManAvtar from '../../Images/ManAvtar.png';
import bell from '../../Images/bell.png';


export default function Navbar() {

  //https://codepen.io/EigenDerArtige/pen/mOboLR

 const Navigate =useNavigate();

 const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(() => {
  setIsLoggedIn(!!localStorage.getItem('user_name'));
}, []);

const usrlogout=()=>{
  localStorage.removeItem('user_name');
  setIsLoggedIn(false);
  Navigate('/');
}

  return (
    <>
    <div className='navbar_wrapper'>
    <nav className='navbar  navbar-expand-lg navbar-light bg-white  mt-0'>
  <div className='container'>
  <div className="logo" style={{width:"109px"}}><img src={logo} className="img-fluid"/></div>
    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>

    
    <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
      <ul className='navbar-nav mx-lg-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
          <Link className="nav-link" to="/">Get started</Link>
    </li>
      
    
        <li className='nav-item'>
         <Link className="nav-link" to="/Educators">Educators</Link>
        </li>
        <li className='nav-item'>
         <Link className="nav-link" to="/OurCourses">Our Courses</Link>
        </li>
        
        <li className='nav-item'>
          <a className='nav-link'  href='#'> Batch </a>
        </li>
        <li className='nav-item'>
        <Link className="nav-link" to="/Successstory">Success story</Link>
        </li>

 
        
        {/* <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
            Dropdown
          </a>
          <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
            <li><a className='dropdown-item' href='#'>Action</a></li>
            <li><a className='dropdown-item' href='#'>Another action</a></li>
            <li><a className='dropdown-item' href='#'>Something else here</a></li>
          </ul>
        </li> */}
        
      </ul>
      <div className="navbar-nav me-lg-3 ms-lg-4">
      <button type="button" className="btn  position-relative">
  <img src={bell} className='img-fluid'/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    9+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
</div>
          {/* <div className="navbar-nav me-lg-3 ms-lg-4">
        <a className="nav-item nav-link" href="#">Sign in</a>
      </div>
     */}
      {/* <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
        <a href="#" className="btn btn-sm btn-primary w-full w-lg-auto">
          Register
        </a>
      </div> */}

        <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
      
         {isLoggedIn &&
         <div className="dropdown text-end">
          <a href="javascript void(0)" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={ManAvtar} alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" style={{position:'absolute',inset: '0px auto auto 0px',margin: '0px',transform: 'translate(-110px, 34px)'}}>
          <li><Link to="UserProfile" className="dropdown-item" href="#">Student Admin</Link></li>
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" onClick={usrlogout} style={{cursor:'pointer'}}>Sign out</a></li>
          </ul>
        </div>
        }
        </div>
          
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
