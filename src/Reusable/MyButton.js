import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class MyButton extends Component{
  state = {
    menu:[
      {title:1},
      {title:2},
      {title:3},
    ],
    angka: 0
  }

  changeTitle = (title) => {
    // this.setState({
    //   angka
    // })
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps,"<==================")
  }

  render(){
    const { variant,warna,action, valueForAction, title, angka } = this.props
    return(
      <Button
        variant={variant}
        color={warna || 'secondary'} 
        onClick={this.changeTitle}
      >
      {title}
      </Button>
    )
  }
}

export default MyButton