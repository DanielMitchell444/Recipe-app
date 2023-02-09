import React from "react";

const CardItems = (props) => {
 return(
 <div>
<img src = {props.items} />
<h1>{props.title}</h1>
<button>
 Favorite Item   
</button>
 </div>
 )
}

export default CardItems;