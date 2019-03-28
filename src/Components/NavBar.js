import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import ContextStore from '../contextStore'
import {Link} from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,  
  },
};

class NavBar extends React.Component {
  state = {
    angka: 0,
    angka2: 0
    }

  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps,"<============== next Props")
  //   this.setState({
  //     angka: nextProps.angkaParent + 1
  //   })
  // }

  // shouldComponentUpdate(nextProps){
  //   if(nextprops != this.state.angka){
  //     return true
  //   }
  // }

  render(){
    const { classes, angkaParent } = this.props;
    let name = 'udin'
    return (
      <ContextStore.Consumer>
        { parameterThisState => {
          return (
            <div className={classes.root}>
             <AppBar position="static">
               <Toolbar  dariAngkaParent={angkaParent}>
                 <Typography variant="h6" color="inherit" className={classes.grow}>
                   <Link to="/" >Home</Link>
                 </Typography>
                 <Typography variant="h6" color="inherit" className={classes.grow}>
                  <Link to="/profile" >Profile</Link>
                 </Typography>
                 <Typography variant="h6" color="inherit" className={classes.grow}>
                  <Link to="/about" >About</Link>
                 </Typography>
                 <Typography variant="h6" color="inherit" className={classes.grow}>
                  <Link to={`/about/${name}`} >Me</Link>
                 </Typography>
                 <Typography variant="h6" color="inherit" className={classes.grow}>
                  <Link to={{pathname:`/about/${name}`, search:"?baju=merah"}}  >Search Udin</Link>
                 </Typography>
               </Toolbar>
             </AppBar>
           </div>
         )
        }}
      </ContextStore.Consumer>
     
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object,
  informasi: PropTypes.string,
  judul: PropTypes.bool.isRequired,
  ubahJudul: PropTypes.func
}


export default withStyles(styles)(NavBar);