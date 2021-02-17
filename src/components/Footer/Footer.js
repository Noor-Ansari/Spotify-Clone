import React, {useEffect, useState} from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import {useDataLayerValue} from "../../DataLayer"
import "./Footer.css";


function Footer() {
    const [{playing}, dispatch] = useDataLayerValue()

    const handlePlayPause = () =>{
        if (playing){
            dispatch({
                type : "SET_PLAYING",
                playing : false
            })
        }else{
            dispatch({
                type : "SET_PLAYING",
                playing : true
            })
        }
    }
    return (
        <div className="footer">
           <div className="footer-left">
               <img src="#" alt="" />
                <div className="footer-songInfo">
                    <h4>Memories</h4>
                    <p>Maroon 5</p>
                </div>
           </div>
            <div className="footer-center">
                <ShuffleIcon className="footer-green"/>
                <SkipPreviousIcon className="footer-icon" />
                {playing ? (
                    <PauseCircleFilledIcon
                    onClick={handlePlayPause}
                    fontSize = "large"
                    className="footer-icon" 
                    />
                ):(
                    <PlayCircleFilledIcon
                    onClick={handlePlayPause}
                    fontSize="large"
                    className="footer-icon"
                />
                )}
                <SkipNextIcon className="footer-icon" />
                <RepeatIcon className="footer-green" />
            </div>

           <div className="footer-right">
               <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeUpIcon/>
                    </Grid>
                    <Grid item xs>
                       <Slider aria-labelledby="continuous-slider" />
                    </Grid>
               </Grid>
           </div>
        </div>
    )
}

export default Footer;
