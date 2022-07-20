import React from 'react'
import moment from 'moment'

import {
  withStyles,
  Typography,
  ButtonBase,
  Paper,
  Grid,
  Chip,
  Link

} from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%'
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  chip: {
    margin: theme.spacing.unit
  },
  link: {
    margin: theme.spacing.unit
  }
})

const Repo = ({
  classes,
  avatar_url,
  name,
  html_url,
  owner,
  description,
  stargazers_count,
  open_issues_count,
  created_at

}) => {

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid >
            <ButtonBase className={classes.image}>
              <a>
                <img className={classes.img} alt='Owner Avatar' src={` ${avatar_url} `} />
              </a>
            </ButtonBase>
          </Grid>
          <Grid sm container>
            <Grid   container direction='column'>
              <Grid >
                <Typography  variant='h3'>
                  <Link
                    color='inherit'
                    target='_blank'
                    rel='noopener noreferrer'
                    underline='hover'
                    className={classes.link}
                  >
                    { name }
                  </Link>
                </Typography>
                <Typography  variant='headline'>{ description }</Typography>
                <Chip
                  label={` Stars: ${stargazers_count} `}
                  className={classes.chip}
                  href='#chip'
                  clickable
                  variant='outlined'
                />
                <Chip
                  label={` Issues: ${open_issues_count} `}
                  className={classes.chip}
                  clickable
                  variant='outlined'
                />
                <Typography
                  color='primary'
                  inline>
                  Last Pushed { moment(created_at).fromNow() } By { owner }
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid className= "" >{' > '}</Grid> */}
      </Paper>
    </div>
  )
}

export default withStyles(styles)(Repo)