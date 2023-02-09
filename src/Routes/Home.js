import React from "react";
import food from "../data/food";
import data from "../data/data";
import Card from "../Components/Card";
import styles from '../App.module.css';
import {useNavigate} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
const Home = (props) => {

const history = useNavigate();

const redirect = () => {
  history('/breakfast')
}

 return(
<div className= {styles.content}>
    <h1>Choose your favorite category</h1>
<div className= {styles.content2}>
 {data.map((card) => {
 return <Card
 image = {card.image} 
 name = {card.name}
 onClick = {redirect}
 />
 })}
 <button
 onClick = {redirect}
 >
 </button>
  </div>
 </div>
 )
}

export default Home;