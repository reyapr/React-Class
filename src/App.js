import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import ListPeople from './Components/ListPeople'
import Button from '@material-ui/core/Button';
import MyButton from './Reusable/MyButton'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'ini sebuah title lewat state',
      info: 'Learn React',
      people: [
        {        
          name: 'Obi Wan',    
          status: 'Jedi'      
        },
        {        
          name: 'Luke Skywalker',            
          status: 'Padawan'      
        }
      ]    
    }
  }

  changeTitle = (val) => {
    this.setState({
      title: val,
      info: 'info baru'
    })
  }

  render() {
    let { title, info, people } = this.state
    console.log(this.obj)
    const linkHacktiv8 = "https://hacktiv8.com/img/fox.png__vzu2vhp2VRX%2Bewg7J0bPlaAa9e377ae39495073d0e66db163fc8d9b"
    return (
      <React.Fragment>
        <NavBar judul={title} informasi={info} ubahJudul={this.changeTitle}/>
        <div>
          <header className="App-header">
            <ListPeople people={people} />
            <MyButton 
              variant="contained" 
              action={() => this.changeTitle('ubah judul')}
              title="App Button"
            />
              
          </header>
        </div>
      </React.Fragment>
    );
  }
}


export default App;
