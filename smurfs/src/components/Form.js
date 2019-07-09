import React from 'react';
import { connect } from 'react-redux';
import { addSmurf, getData } from '../actions';

class Form extends React.Component{


        state = {
            name:"",
            age:"",
            height:"",
            id:null
        }



handleChanges=(e)=>{
    this.setState({

        [e.target.name] : e.target.value

    })
}

addSmurfHandler = (e) =>{
    e.preventDefault()
    console.log('attemped to add smurf')
    const newSmurf = {
        name: this.state.name,
        age:this.state.age,
        height:this.state.height,
        id:null,
    }

    this.props.addSmurf(newSmurf)

    this.setState({
        name:"",
        age:"",
        height:0,
        id:null
    })

   
}


render(){

        return(
            <div>
                        <form onSubmit= {e=>{this.addSmurfHandler(e)}}>        
                             <input 
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.handleChanges}
                             />   
                             <input 
                                type="text"
                                name="age"
                                placeholder="Age"
                                value={this.state.age}
                                onChange={this.handleChanges}
                             /> 
                             <input 
                                type="text"
                                name="height"
                                placeholder="Height"
                                value={this.state.height}
                                onChange={this.handleChanges}
                             /> 
                            <button type='submit'>ADD SMURF</button>
                        </form>
            
            </div>

        )

    }
}

const mapStateToProps = state =>{
        return {

        }
}

export default connect(mapStateToProps, {addSmurf, getData})(Form);




