import React from "react"

class Toggle extends React.Component{

constructor(){
    super()
this.state={
toggle:false

}

} 
clickMethod=()=>{
    this.setState({toggle:!this.state.toggle})
}

render(){

return( 

    <> 
<button onClick={this.clickMethod}>click </button>
{this.state.toggle&&(<div>world from console</div>)}
    </>
)

}

} 

export default Toggle