import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../App.css";



const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  songName :{
    width: '100%',
    textAlign: 'center',
    margin: '5px 0 10px' 
 },
 flexContainer:{
  display:'flex',
  flexWrap: 'nowrap'
},
flexContainerDiv :{
  width: '75px',
  height: '90px',
  margin: '10px 10px 10px',
  textAlign: 'center'
}
});



export default function SongsList({...props}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      {props.BrowseCategory?<div className={classes.flexContainer}>
      {
      props.SongsData.items.map((asset)=>{
                  return  ( <div className={classes.flexContainerDiv} key={asset.id}><a href={asset.href}>
                  <img src={asset.icons[0].url}  alt="logo"  style={{height:'70px',width:'70px'}} /></a>
                  <h6 className={classes.songName}> {asset.name.substring(0,10)+'...'}</h6> </div>
                    )
                })
      }
      </div>:<div className={classes.flexContainer}>
      {
      props.SongsData.items.map((asset)=>{
                  return  ( <div className={classes.flexContainerDiv} key={asset.id}><a href={asset.href}>
                  <img src={asset.images[0].url}  alt="logo"  style={{height:'70px',width:'70px'}} /></a>
                  <h6 className={classes.songName}> {asset.name.substring(0,10)+'...'}</h6> </div>
                    )
                })
      }
      </div>
      
       }
    </React.Fragment>
  );
}