import React, {useEffect} from "react";
import Login from "./components/Login/Login";
import {getTokenFromUrl} from "./components/spotify-config";
import spotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player"
import { useDataLayerValue } from "E:/React/spotify-clone/src/DataLayer.js";

const spotify = new spotifyWebApi();

function App() {
  const [{token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){
      spotify.setAccessToken(_token)

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then(user => {
        dispatch({
          type : "SET_USER",
          user : user
        })
      })

      spotify.getPlaylist("37i9dQZEVXcPR75MvH0o4f").then(response =>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly : response
        })
      })

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type : "SET_PLAYLISTS",
          playlists : playlists
        })
      })

    }
  }, [token, dispatch])

  return (
    <div className="App">
      {token ? <Player/> :  <Login/>}
    </div>
  );
}

export default App;
