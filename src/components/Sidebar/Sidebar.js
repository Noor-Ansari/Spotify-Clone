import React from 'react';
import SidebarOptions from '../SidebarOptions/SidebarOptions';
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import { useDataLayerValue } from "E:/React/spotify-clone/src/DataLayer.js";

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue()
    return (
        <div className="sidebar">
            <img
            className="sidebar-logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
            />
            <SidebarOptions title={"Home"} Icon={HomeIcon}/>
            <SidebarOptions title={"Search"} Icon={SearchSharpIcon}/>
            <SidebarOptions title={"Your Library"} Icon={ViewColumnIcon}/>

            <br/>
            <strong className="sidebar-title">PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map(playlist => <SidebarOptions title={playlist.name} />)}
        </div>
    )
}

export default Sidebar
