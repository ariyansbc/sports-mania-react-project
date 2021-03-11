import React, { useState, useEffect } from 'react';
import './Home.css'
import League from '../League/League';


const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England&s=Soccer";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLeagues(data.countrys)
            })
    }, [])

    return (
        <div className="container-fluid">
            <div className="banner-area">
                <h2 className="text-center">Sports Mania</h2>
            </div>
            <div className="container">
                <div className="league-card-area">
                    {
                        leagues.map(league => <League league={league} key={league.idLeague}></League>)
                    }
                </div>
             </div>
        </div>
    );
};

export default Home;