import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LeagueDetailsInfo from '../LeagueDetailsInfo/LeagueDetailsInfo';

const LeagueDetails = () => {
    const {idLeague}  = useParams()

    const [leagueDetails, setLeagueDetails] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLeagueDetails(data.leagues)
                
            })

    }, [idLeague])
    // console.log(leagueDetails)
    return (
        <div className="league-details">
            {
                leagueDetails.map(ld=> <LeagueDetailsInfo leagueDetails={ld} key={ld.idLeague}></LeagueDetailsInfo> )
            }
        </div>
    );
};
export default LeagueDetails;