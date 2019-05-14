import React from 'react';
import './List.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//~ const List = props => (
  //~ <ul>
    //~ {
      //~ props.name.map((item, index) => <li key={index}>{item} <span aria-hidden="true" >&times;</span></li>)
    //~ }
  //~ </ul>
  
//~ );
  

//~ export default List;

class List extends React.Component {
	
 constructor(props) {
    super(props);
    this.state ={
         data:props
		} 
  }
  
  removeData(index,e){
	  let data =[];
	  data = this.state.data;
	
	 
        data.name.splice(index, 1);
        console.log(data);
        this.setState({
            data: data
        })
	  }

   render(){
	   return(
		  this.state.data.name.map((item, index) => <li key={index}>{item} <span aria-hidden="true" onClick={this.removeData.bind(this,index)}>&times;</span></li>))
		 
		  
   }
}

export default List;
