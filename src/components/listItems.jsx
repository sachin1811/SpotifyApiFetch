import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HeadsetIcon from '@material-ui/icons/Headset';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';

export const mainListItems = (
  <div>
    
    <ListItem button>
      <ListItemIcon>
        <HeadsetIcon style={{fill: "#FFFAFA"}} />
      </ListItemIcon>
      <ListItemText primary="Discover" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SearchIcon style={{fill: "#FFFAFA"}} />
      </ListItemIcon>
      <ListItemText primary="Search" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FavoriteIcon style={{fill: "#FFFAFA"}} />
      </ListItemIcon>
      <ListItemText primary="Favorites" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PlayCircleFilledIcon style={{fill: "#FFFAFA"}} />
      </ListItemIcon>
      <ListItemText primary="Playlists" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FormatAlignRightIcon style={{fill: "#FFFAFA"}}/>
      </ListItemIcon>
      <ListItemText primary="Charts" />
    </ListItem>
  </div>
);
