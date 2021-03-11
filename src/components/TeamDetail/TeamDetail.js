import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import maleImg from '../../images/male.png';
import femaleImg from '../../images/female.png';
import found from '../../images/found 1.png';
import country from '../../images/flag.png';
import sport from '../../images/sport.png';
import gender from '../../images/gender.png';
import facebook from '../../images/Facebook.png';
import youtube from '../../images/YouTube.png';
import twitter from '../../images/Twitter.png'
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
const TeamDetail = () => {
    const {teamId}= useParams();
    const [teamInfo, setTeamInfo]=useState([]);
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamInfo(data.teams[0]));
    },[])
    let teamImg;

    const iconStyle={
        height:'15px',
        width: '15px',
        marginRight: '7px',
        
    };
    const iconStyle2={
        height: '40px',
        width: '40px',
        margin: '10px',
    }
    if(teamInfo.strGender==='Male'){
        teamImg = maleImg;
    }
    else if(teamInfo.strGender==='Female'){
        teamImg=femaleImg;
    }
    else{
        teamImg=femaleImg;
    }
    const backgroundStyle={
        background: `url('${teamInfo.strStadiumThumb}')`,
        backgroundSize: 'auto'
    }
    return (
        <div className="body">
            <div style={backgroundStyle} className="detailsTopBanner">
                <div className='topBannerLayer'>
                    <img src={teamInfo.strTeamBadge} alt=""/>
                </div>
            </div>
            <div className='team-details'>
                <div className='teamDetailsInfo'>
                    <h2>{teamInfo.strTeam}</h2>
                    <p><img src={found}style={iconStyle}/>Founded: {teamInfo.intFormedYear}</p>
                    <p><img src={country}style={iconStyle}/>Country: {teamInfo.strCountry}</p>
                    <p><img src={sport}style={iconStyle}/>Sport type: {teamInfo.strSport}</p>
                    <p><img src={gender}style={iconStyle}/>Gender: {teamInfo.strGender}</p>
                </div>
                <div className='teamDetailsImg'>
                    <img src={teamImg} alt=""/>
                </div>
            </div>
            <div className='team-description'>
                <p>{teamInfo.strDescriptionEN}</p>
            </div>
            <div className='emptyBlock'>
                <div className='link'>
                    <a href={`https://${teamInfo.strFacebook}`} target='_blank'><FontAwesomeIcon icon={faFacebookSquare}style={iconStyle2}/></a>
                    <a href={`https://${teamInfo.strYoutube}`} target='_blank'><FontAwesomeIcon icon={faYoutubeSquare} style={iconStyle2}/></a>
                    <a href={`https://${teamInfo.strTwitter}`} target='_blank'><FontAwesomeIcon icon={faTwitterSquare} style={iconStyle2}/></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;