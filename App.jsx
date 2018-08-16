import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>(
  {
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
  
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  }
)

// class App extends React.Component{
//   constructor(props) {
//     super(props)
//   };
  
//     render(){
//       const  {classes}  = this.props;
//         return(
//           <div className={classes.layout}> Test With Class </div>
//         )
//     }
// }

//test with function
function App(props){
  const{ classes } = props;
  return(
    <div className={classes.layout}> Test With Function </div>
  )
}

export default withStyles(styles)(App);
