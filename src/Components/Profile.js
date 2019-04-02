import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { increment, decrement } from '../Redux/actions'
import { bindActionCreators } from  'redux'

class Profile extends React.Component{

  increment = () => {
    console.log(this.props,`<========================= this.props =======================`);
    this.props.increment()
  }
  decrement = () => {
    console.log(this.props,`<========================= this.props =======================`);
    this.props.decrement(10)
  }

  render(){
    const htmlString = "<h4>PROFILE</h4>"
    const { title, infoFromRedux, number } = this.props
    return(
      <div>
        {title}: <div dangerouslySetInnerHTML={{__html:htmlString}} />
        {infoFromRedux}
        ================== {number} ================= 
        <Button 
          color='secondary' 
          onClick={this.increment} >
          button
        </Button>
        <Button 
          color='secondary' 
          onClick={this.decrement} >
          DECREMENT
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.title,
  infoFromRedux: state.info,
  number: state.angka
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  increment,
  decrement
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Profile)