//Import react
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Divider } from './node_modules/@material-ui/core';


//style using in Footer
const FooterStyles = theme => (
  {
    icon: {
      margin: 3
    }
  }
)

//funciton Footer
function Footer(props) {
  const { classes } = props;
  return (
    <div>
      <Divider/>
      <Grid container spacing={30}>
        <Grid item xs={4}>
          <Typography >
            Email Support:
            <a href="https://mail.google.com/">support@eosgui.com </a>
            <br />
            EOS is free & open source:
            <a href="https://github.com/"> GitHub</a>
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography align="center">
            Donations are alway appreciated! <br />
            EOSAccount: 123esogui123.<br />
            © 2018 EOSgui, Inc
          </Typography>

        </Grid>

        <Grid item xs={4} container direction="row" justify="flex-end" alignItems="center">
          <img height="30" width="30" href="https://facebook.com/" src="../image/facebook.svg" className={classes.icon}></img>
          <img height="30" width="30" href="https://youtube.com/" src="../image/youtube.svg" className={classes.icon}></img>
          <img height="30" width="30" href="https://twitter.com/" src="../image/twitter.svg"className={classes.icon}></img>
          <img height="30" width="30" href="https://github.com/" src="../image/github.svg"className={classes.icon}></img>
          <div>
          <img height="70" width="70" href="https://eosgui.com/" src="../image/eos.svg"className={classes.icon}></img>
          </div>
        </Grid>

      </Grid>
    </div>
  )
}
export default withStyles(FooterStyles)(Footer);