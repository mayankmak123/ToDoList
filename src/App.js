
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import List from './List';
import deleteItem from './List';
class ToDoList extends React.Component {
	
 constructor() {
    super();
    this.state ={
         value: '',
         array:[]
		}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Change = this.Change.bind(this);
  }
    handleSubmit(event) {
        event.preventDefault();
		this.setState({
		  value: '',
		 
		});
        this.state.array.push(this.state.value);
  }

	Change(event){
        this.setState({
		  value: event.target.value 
		});
    }
	


  render() {
    return (
       <div>
       <h1 className="h1">To Do List </h1>
		  <form onSubmit={this.handleSubmit}>
			<label>
			  <input name="list" type="text" className="form-control" value={this.state.value} onChange={this.Change}  />
			  <button className="form-control">Add</button>
			</label>
		  </form>
			<List name={this.state.array} />

        </div>
    );
  }
}


export default ToDoList;
