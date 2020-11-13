import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  makeStyles,
  Grid,
  Paper,
  ButtonGroup,
  CssBaseline,
  Hidden,
  Backdrop,
  Badge,
  IconButton,
  Tooltip,
  Tabs,
  Tab,
  Box,
  Typography,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import ClassIcon from '@material-ui/icons/Class';
import { connect } from 'react-redux';
import WorkshopCard from './WorkshopCard';
import TeamCard from './TeamCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
  cardHolder: {
    padding: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    right: theme.spacing(2),
  },
}));


const CardHolder = ({ type, allWorkshops, workshopTeams, }) => {
  const [cards, setCards] = useState();
  const classes = useStyles();

  return (
    <Grid
      container
      item
      spacing={2}
      direction="row"
      className={classes.cardHolder}
    >
      {
        type === 'workshops' &&
        allWorkshops.map((workshop) => {
          return (
            <WorkshopCard {...workshop} />
          )
        })
      }

      {type === 'teams' &&
        workshopTeams.map((team) => {
          return (
            <TeamCard {...team} />
          )
        })
      }

    </Grid>
  )
}

const mapStateToProps = (state) => {
  const allWorkshops = [
    {
      name: 'هوش مصنوعی',
      description: 'این کارگاه خیلی قشنگ است. انگشت‌های خود را هم با آن می‌خورید :/',
 
    },
    {
      name: 'هوش مصنوعی',
      description: 'این کارگاه خیلی قشنگ است. انگشت‌های خود را هم با آن می‌خورید :/',
      teamsNumber: 3,
      mentorsNumber: 6,
    },
    {
      name: 'هوش مصنوعی',
      description: 'این کارگاه خیلی قشنگ است. انگشت‌های خود را هم با آن می‌خورید :/',
      teamsNumber: 3,
      mentorsNumber: 6,
    },
  ]
  const workshopTeams = [
    {
      "player": {
        "player_type": "PARTICIPANT",
        "name": "",
        "id": 2,
        "score": 3
      },
      "current_state": {
        "id": 2,
        "name": "ass"
      }
    },
    {
      "player": {
        "player_type": "TEAM",
        "id": 4,
        "uuid": "c70d41a8-8151-469d-acf2-f4e4fe5ba9a9",
        "group_name": "test team",
        "score": 5,
        "team_members": [
          "faf@gmal.com"
        ]
      },
      "current_state": {
        "id": 2,
        "name": "ass"
      }
    }
  ]
  const teamMembers = {}
  return ({
    allWorkshops,//: state.mentor.allWorkshops,
    workshopTeams,
  })
}



export default connect(
  mapStateToProps,
  {

  })(CardHolder);