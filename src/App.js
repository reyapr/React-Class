import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import ListPeople from './Components/ListPeople'
import Button from '@material-ui/core/Button';
import MyButton, { fungsi1 } from './Reusable/MyButton'
import axios from 'axios'
import ContextStore from './contextStore'
import HookExample from './Components/Hook'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'
import About from './Components/About'
import Me from './Components/Me'
import Other from './Components/Other'
import NotFound from './Components/NoMatch'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'ini sebuah title lewat state',
      info: 'Learn React',
      people: [],   
      angka: 0 
    }
  }
  

  changeTitle = (val) => {
    
    this.setState({
      title: val,
      info: 'info baru'
    })
  }

  ubahAngka = () => {
    // console.log("<=============== ")
    let angka = this.state.angka
     angka+=1
    this.setState({
      angka
    })
  }

  componentDidMount(){
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        console.log(response.data,"<======================== RESPONSE===========")
        this.setState({
          people: response.data.results
        })
      })
  }

  render() {
    let { title, info, people, angka } = this.state
    return (
      <BrowserRouter>
        <ContextStore.Provider value={this.state}>
          <React.Fragment>

            <NavBar judul={title} informasi={info} ubahJudul={this.changeTitle} angkaParent={angka}/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/profile" component={Profile}/>
              <Route exact path="/about" component={About}/>
            
              <Route path="/about/other" component={Other}/>
              <Route path="/about/:name" component={Me}/>
              <Route component={NotFound} />
            </Switch>
          </React.Fragment>
        </ContextStore.Provider>
      </BrowserRouter>
    );
  }
}


export default App;
