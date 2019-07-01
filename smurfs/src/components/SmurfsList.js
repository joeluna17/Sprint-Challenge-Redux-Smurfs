import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';



class SmurfList extends React.Component {
    

componentDidMount(){

}

render(){

        return(
            <div>
                this.props.smurfs.map(smurf => 
                  return  <Smurf smurf = {smurf} />
                )
            </div>
        )
}


}


const mapStateToProps = state => {
        return {
            smurfs = state.smurfs
        }
}

export default connect(mapStateToProps,{})(SmurfList)




