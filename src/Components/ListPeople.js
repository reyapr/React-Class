import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import MyButton from '../Reusable/MyButton'

class ListPeople extends Component {  
  state ={
    val: 'listpople'
  }

  ubahVal = () => {
    this.setState({
      val:'diubah by list people'
    })
  }

  render () {    
    return(
      <ul>       
        <React.Fragment>
            <li>{this.state.val}</li>
            {/* {
              this.props.people.map((data,idx) => {
              return(
                <React.Fragment key={idx}>
                  <li> name: {data.name} </li> 
                  <li> status: {data.status} </li>
                </React.Fragment>
              )
            })
            } */}
            <MyButton 
              variant="contained" 
              warna="primary" 
              action={this.ubahVal}
              title="Button List People"
            />
        </React.Fragment>
      </ul>  
    )
  }
}

export default ListPeople