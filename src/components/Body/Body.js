import React from 'react';
import "./Body.css"
import Header from "../Header/Header"
import { useDataLayerValue } from '../../DataLayer';
import SongsRow from "../SongsRow/SongsRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body() {

    const [{discover_weekly}, dispatch] = useDataLayerValue(); 

    return (
        <div className="body">
            <Header/>
            <div className="body-info">
                <img src={discover_weekly?.images[0]?.url} alt=""/>
                <div className="body-infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilledIcon
                    className="body-shuffle"
                     />
                    <FavoriteBorderIcon/>
                    <MoreHorizIcon/>
                </div>   
                {discover_weekly?.tracks?.items?.map((item, idx) => (<SongsRow key={idx} track={item.track} />))}            
            </div>
        </div>
    )
}

export default Body
