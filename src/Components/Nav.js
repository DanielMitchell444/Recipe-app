import React from "react";
import { Link } from "react-router-dom";
import styles from '../App.module.css';

const Nav = () => {
    return(
    <nav className= {styles.nav}>
     <input type = "text" />
    <div className= {styles.list}>
   <li className= {styles.list}>
     <Link className= {styles.list} to = "/">Home</Link>
   </li>
   <li className= {styles.list}>
   <Link className= {styles.list} to = "/About">About</Link>
   </li>
   <li className= {styles.list}>
    <Link className= {styles.list} to = "/favorites">Favorites</Link>
   </li>
    </div>
    </nav>
    )
   }
   
   export default Nav;