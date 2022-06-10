import React from "react";
import Heading from "./Heading";
import Images from "./Images";


function Card(props){
    return(
        <>
            <div className="cards">
                <div className="card">
                    <Images imgsrc={props.imgsrc} />
                    <div className="card_info">
                         <Heading sname={props.sname} />
                        <span className="card_category"> {props.tittle} </span>
                        <a href={props.href}  target="blank" >
                            <button> Watch now </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
  
    )
  };

  export default Card;