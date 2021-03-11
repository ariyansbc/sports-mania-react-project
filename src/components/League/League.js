import React from 'react';
import { Link,Route,Router } from 'react-router-dom';
import './League.css'
import { FaAngleRight, FaFacebookF } from "react-icons/fa";

const League = (props) => {
   
    const {idLeague, strLeague,strSport, strBadge} = props.league;

    return (
        <div className="league-container">
            <div className="league">
                <img src={strBadge} alt=""/>
                <h3>{strLeague}</h3>
                <p>Sports type: {strSport}</p>
                <button className="btn-primary btn" ><Link to={"/league/"+idLeague}> <span className='league-btn'>Explore <FaAngleRight></FaAngleRight> </span></Link></button>
                
            </div>
        </div>
    );
};

export default League;