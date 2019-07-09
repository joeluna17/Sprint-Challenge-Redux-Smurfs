import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import { getData } from '../actions';



class SmurfList extends React.Component {
    

componentDidMount(){
    this.props.getData();
}

render(){

        return(
            <div>
                {
                this.props.smurfs.map(smurf =>  {
                  return  <Smurf smurf = {smurf} key={smurf.id} /> })
                }
            </div>
          )
}

}


const mapStateToProps = state => {
    console.log(state,"in the MSTP")
        return {
            smurfs: state.smurfs
        }
}

export default connect(mapStateToProps,{ getData })(SmurfList);




