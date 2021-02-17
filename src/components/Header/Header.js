import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { useDataLayerValue } from '../../DataLayer';

function Header({spotify}) {
    const [{user}, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon/>
                <input 
                type="text"
                placeholder="Search for Artists, Songs, or Podcasts"/>   
            </div>
            <div className="header-right">
                <Avatar className="profile-pic" alt={user?.display_name} src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
