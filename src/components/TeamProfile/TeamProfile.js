import { Button } from 'react-bootstrap';
import React from 'react';
import './TeamProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const TeamProfile = (props) => {
    console.log(props);
    const {strTeam, strTeamBadge,idTeam, strSport}=props.teamData;
    return (
        <div className='team-profile'>
            <div >
                <img src={strTeamBadge} alt=""/>
                <h1>{strTeam}</h1>
                <p>Sports type: {strSport}</p>
                <Link to={`/team/${idTeam}`}>
                    <Button
                        className="exploreButton"
                        onClick={()=> props.handleClubDetail(idTeam)}
                        >Explore<FontAwesomeIcon icon={faArrowRight}style={{marginLeft:'5px'}}>
                        </FontAwesomeIcon>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default TeamProfile;