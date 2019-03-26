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
    console.log(people,"<=================== PEOPLE FROM RENDER")
    const linkHacktiv8 = "https://hacktiv8.com/img/fox.png__vzu2vhp2VRX%2Bewg7J0bPlaAa9e377ae39495073d0e66db163fc8d9b"
    return (
      <ContextStore.Provider value={this.state}>
        <React.Fragment>
          <NavBar judul={title} informasi={info} ubahJudul={this.changeTitle} angkaParent={angka}/>
          <div>
            {/* <header className="App-header">
              <ListPeople people={people} />
              {angka}
              <Button 
                variant="contained" 
                onClick={this.ubahAngka}
                // title="Increment"
                color="secondary"
              >
                increment
              </Button>
              <ul>
                {
                  people.map(orang => {
                    return (
                      <li>name: {orang.name}</li>
                    )
                  })
                }
              </ul>
            </header> */}
            <HookExample/>
            
          </div>
        </React.Fragment>
      </ContextStore.Provider>
    );
  }
}


export default App;
