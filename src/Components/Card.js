import React from 'react';
import styles from '../App.module.css'
import { useNavigate } from 'react-router-dom';

const buttonCard = (props) => {



 return(
 <div 
 onClick = {props.click}
 className= {styles.card}>
 <img src = {props.image} />
  <button
  >
 {props.name}

  </button>
 </div>
 )
}

export default buttonCard;