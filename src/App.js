import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './App.css';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TitleRoundedIcon from '@material-ui/icons/TitleRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import StoreRoundedIcon from '@material-ui/icons/StoreRounded';
import HowToVoteRoundedIcon from '@material-ui/icons/HowToVoteRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import ScoreRoundedIcon from '@material-ui/icons/ScoreRounded';
import TimelapseRoundedIcon from '@material-ui/icons/TimelapseRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import NewReleasesRoundedIcon from '@material-ui/icons/NewReleasesRounded';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import PublicRoundedIcon from '@material-ui/icons/PublicRounded';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import HttpRoundedIcon from '@material-ui/icons/HttpRounded';
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';

const style = {
  color: '#dce775',
};
const iconstyle = {
  fontSize: '3.5rem',
};

const App = () => {
  const [query, setQuery] = useState('');
  const [info, setInfo] = useState({});

  const handleClick = (query) => {
    if (query === '') {
      swal('Oops!', 'Please Enter Some Text!', 'error');
    } else {
      const moviename = query;
      axios
        .get(`https://www.omdbapi.com/?t=${moviename}&apikey=b0eb5c66`)
        .then((resp) => {
          if (resp.data.Error) swal('Oops!', 'Movie Not Found!', 'error');
          setInfo(resp.data);
        });
      setQuery('');
    }
  };
  const search = async (e) => {
    if (e.key === 'Enter') {
      if (query === '') {
        swal('Oops!', 'Please Enter Some Text!', 'error');
      } else {
        const moviename = query;
        axios
          .get(`https://www.omdbapi.com/?t=${moviename}&apikey=b0eb5c66`)
          .then((resp) => {
            if (resp.data.Error) swal('Oops!', 'Movie Not Found!', 'error');
            setInfo(resp.data);
          });
        setQuery('');
      }
    }
  };
  useEffect(() => {
    const data = localStorage.getItem('info');
    if (data) {
      setInfo(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('info', JSON.stringify(info));
  });

  return (
    <div className='App'>
      <h1>
        <i>
          <InfoTwoToneIcon style={iconstyle} />
        </i>
        Movies Info Tracker by RK
      </h1>
      <Grid
        spacing={3}
        container
        justify='center'
        direction='row'
        alignItems='center'
      >
        <Grid item>
          <TextField
            label='Search Movies'
            id='filled-size-normal'
            variant='filled'
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={() => handleClick(query)}
            variant='contained'
            color='primary'
            endIcon={<Icon>send</Icon>}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      <Container maxWidth='sm'>
        <List aria-label='main mailbox folders'>
          <ListItem>
            <ListItemIcon>
              <TitleRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Title: &emsp; {info.Title}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <LocalOfferRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Genre: &emsp; {info.Genre}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <NewReleasesRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Released: &emsp; {info.Released}
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <CalendarTodayRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>Year: &emsp; {info.Year}</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <TimelapseRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Duration: &emsp; {info.Runtime}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <LanguageRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Language: &emsp; {info.Language}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <SubjectRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Storyline: &emsp; {info.Plot}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <PeopleRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Actors: &emsp; {info.Actors}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <PeopleRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Writer(s): &emsp; {info.Writer}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <PeopleRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Director(s): &emsp; {info.Director}
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <PublicRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Country: &emsp; {info.Country}
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Awards: &emsp; {info.Awards}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <ScoreRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Metascore: &emsp; {info.Metascore}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <GradeRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              IMDB Ratings: &emsp; {info.imdbRating}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <HowToVoteRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              IMDB Ratings: &emsp; {info.imdbVotes}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <MonetizationOnRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Box Office: &emsp; {info.BoxOffice}
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <StoreRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Production: &emsp; {info.Production}
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem>
            <ListItemIcon>
              <HttpRoundedIcon />
            </ListItemIcon>
            <ListItemText style={style}>
              Website: &emsp; {info.Website}
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Container>
    </div>
  );
};

export default App;
