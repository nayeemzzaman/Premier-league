import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import TeamProfile from '../TeamProfile/TeamProfile';

import './Home.css'
const Home = () => {
    const [teams, setTeams]= useState([]);
    useEffect(()=>{
        const url='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams));
    },[])
    const handleClubDetail=(idTeam)=>{
        
    }
    return (
        <div className="home">
            <Header ></Header>
            <div className="container team-container">
                {
                    teams.map(team => <TeamProfile 
                        teamData={team} key={team.idTeam} handleClubDetail={handleClubDetail}>
                        </TeamProfile>)
                }
            </div>
            <div className='emptyBlock'>

            </div>
        </div>
    );
};

export default Home;