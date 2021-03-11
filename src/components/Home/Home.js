import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Route, Router, Switch } from 'react-router';
import Header from '../Header/Header';
import TeamDetail from '../TeamDetail/TeamDetail';
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
                
                <FontAwesomeIcon icon={['fab', 'apple']} />
                <FontAwesomeIcon icon={['fab', 'microsoft']} />
                <FontAwesomeIcon icon={['fab', 'google']} />
            </div>
        </div>
    );
};

export default Home;