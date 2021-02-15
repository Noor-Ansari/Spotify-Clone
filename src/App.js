import Login from "./components/Login/Login";
import {useEffect, useState } from "react";
import {getTokenFromUrl} from "./components/spotify-config";
import spotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player"
import { useDataLayerValue } from "E:/React/spotify-clone/src/DataLayer.js";

const spotify = new spotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type : "SET_USER",
          user : user
        }) 
      })
      spotify.getUserPlaylists().then((playlists =>{
        dispatch({
          type : "SET_PLAYLISTS",
          playlists : playlists
        })
      }))

    }
  }, [])

  return (
    <div className="App">
      {token ? <Player spotify={spotify}/> :  <Login/>}
    </div>
  );
}

export default App;
