import React, { useEffect,Suspense } from 'react';
import { SpotifyApiContext } from 'react-spotify-api';
import Cookies from 'js-cookie';
import "./App.css";
import logo from './logo.svg';
import axios from 'axios';

import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import 'react-spotify-auth/dist/index.css';
const Dashboard = React.lazy(() => import('./components/SpotifySongs'));
//import Dashboard from './components/SpotifySongs';



const App = () => {
  let token = Cookies.get('spotifyAuthToken')
 // const [SongsData,setSongs] = useState([]);
 // console.log(token);
 let SongsData = [];
  useEffect(() =>{
    if(token){
      let config = {
        headers: {'Accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': 'Bearer '+token,
      },
      }
          axios.get("https://api.spotify.com/v1/browse/new-releases?country=IN&limit=20",config)
          .then(res => {
             SongsData.push(res.data.albums);
          });
          axios.get("https://api.spotify.com/v1/browse/featured-playlists?country=IN&limit=20",config)
          .then(res => {
            SongsData.push(res.data.playlists);
          });
          axios.get("https://api.spotify.com/v1/browse/categories?country=IN&limit=20",config)
          .then(res => {
            SongsData.push(res.data.categories);
            
          });
         
        }
  })

  

  return (
      <div>
      
      {token? (
        <SpotifyApiContext.Provider value={token}>
          {/* Your Spotify Code here 
          <p>You are authorized with token: {token}</p>
          <SpotifySongs value={token}></SpotifySongs>
          <SpotifySongs value={token}></SpotifySongs>
          <SpotifySongs value={token}></SpotifySongs>*/}
           <Suspense fallback={<div>Loading...</div>}>
           <Dashboard SongsData={SongsData}></Dashboard>
      </Suspense>
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <div className="App-login">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>SteinnLabs Spotify</h1>
        <SpotifyAuth
          redirectUri='http://localhost:3000/callback'
          clientID='dfddf5a183f14e6c8bcd8bd0bf259aed'
          scopes={[Scopes.userReadPrivate, 'user-read-email']} 
        />
      </header>
      </div>
      )}
    </div>
  )
}
export default App