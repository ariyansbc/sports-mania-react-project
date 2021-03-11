import React from 'react';
import './LeagueDetailsInfo.css'
import maleImg from '../../Photos/male.png'
import femaleImg from '../../Photos/female.png'
import { FaFacebookF, FaTwitter, FaYoutube, FaMapMarkerAlt, FaFontAwesomeFlag, FaFutbol, FaMars } from "react-icons/fa";

const LeagueDetailsInfo = (props) => {

    const { strLogo, strLeague, strFanart4, dateFirstEvent, strGender, strCountry, strSport, strDescriptionEN } = props.leagueDetails;
    let genderImg;

    if(strGender=== "Male") {
        genderImg = maleImg;
    } else {
        genderImg = femaleImg;
    }
    return (
        <div className="container-fluid">
            <div className="league-details-banner">
                <img src={strLogo} alt="" />
            </div>
            <div className="container">
                <div className="details-container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="details-info">
                                <h2>{strLeague}</h2>
                                <h5><FaMapMarkerAlt></FaMapMarkerAlt> Founded: {dateFirstEvent}</h5>
                                <h5><FaFontAwesomeFlag></FaFontAwesomeFlag> Country: {strCountry}</h5>
                                <h5><FaFutbol></FaFutbol> Sport Type: {strSport}</h5>
                                <h5><FaMars></FaMars> Gender: {strGender}</h5>
                            </div>
                        </div>
                        <div className="col-md-5 ">
                            <div className="details-img">
                                <img src={genderImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <p>{strDescriptionEN}</p>
                <ul className="social-icon">
                {/* https://www.youtube.com/c/JhankarMahbub/featured */}
                    <li className="facebook-icon sIcon"><a href="https://www.facebook.com/shahjalal.hossain.3"><FaFacebookF></FaFacebookF></a> </li>
                    <li className="twitter-icon sIcon"><a href="https://twitter.com/JalalShahriar"><FaTwitter></FaTwitter></a></li>
                    <li className="youtube-icon sIcon"><a href="https://www.youtube.com/c/JhankarMahbub/featured"><FaYoutube></FaYoutube></a></li>
                </ul>
            </div>
        </div>
    );
};

export default LeagueDetailsInfo;