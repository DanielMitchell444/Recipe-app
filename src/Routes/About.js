import React from "react";
import styles from '../App.module.css';
import {useNavigate} from 'react-router-dom';

const About = () => {

 const history = useNavigate();

 const redirect = () => {
    history("/breakfast")
 }
 return(
 <div className= {styles.main}>
 <h1>About us</h1>
 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero unde sit repudiandae itaque placeat dolores repellat officia recusandae voluptates neque doloremque voluptate dignissimos aut mollitia molestias est sed harum facere accusamus corporis ab provident, tempora sapiente. Laborum corrupti iure voluptates animi sunt, deleniti nam quae cumque, fuga praesentium consequuntur qui necessitatibus autem eaque ullam, quam deserunt dignissimos repudiandae id rerum.</p>
 <button
 onClick = {redirect}
 >Go back</button>
 </div>
 )
}

export default About;