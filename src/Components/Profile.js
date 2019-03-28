import React from 'react'

class Profile extends React.Component{
  render(){
    const htmlString = "<h4>PROFILE</h4>"
    return(
      <div dangerouslySetInnerHTML={{__html:htmlString}} />
    )
  }
}

export default Profile