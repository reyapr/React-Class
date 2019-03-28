import React from 'react'

class Me extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>{this.props.match.params.name}</div>
    )
  }
}

export default Me