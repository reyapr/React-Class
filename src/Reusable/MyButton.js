import React,{ Component } from 'react'
import Button from '@material-ui/core/Button';

class MyButton extends Component{
  render(){
    const { variant,warna,action, valueForAction, title } = this.props
    return(
      <Button
        variant={variant}
        color={warna || 'secondary'} 
        onClick={action}
      >
      {title}
      </Button>
    )
  }
}

export default MyButton