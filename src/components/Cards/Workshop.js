import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  makeStyles,
  Tab,
  Tabs,
  Grid,
  Paper,
  Typography,
  ButtonGroup,
  CssBaseline,
  CardContent,
  CardActionArea,
  Card,
  CardMedia,
  CardActions,
  Chip,
} from '@material-ui/core'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  icon: {
    textAlign: 'center',
  }
});

const WorkShopCard = ({ name, description, teamNo, mentorNo }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea disabled>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + '/ai.jpg'}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <Grid container direction='row' justify='center'>
          <Grid container item xs={6} justify='center'>
            <Chip variant="outlined" icon={<EmojiPeopleIcon />} label={`${mentorNo} منتور`} />
          </Grid>
          <Grid container item xs={6} justify='center'>
            <Chip variant="outlined" icon={<PeopleAltIcon />} label={`${teamNo} تیم`} />
          </Grid>
        </Grid>
      </CardActionArea>
      <CardActions>
        <Button variant='outlined' fullWidth color="primary">
          مشاهده
        </Button>
      </CardActions>
    </Card >
  );
}

WorkShopCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  teamNo: PropTypes.number.isRequired,
  mentorNo: PropTypes.number.isRequired,
}

export default WorkShopCard;