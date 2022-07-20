import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  progress: {
    margin: theme.spacing(2)
  }
})

const Loading = ({
  classes

}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <CircularProgress
        color='secondary'
        className={classes.progress}
      />
    </div>
  )
}

export default withStyles(styles)(Loading)