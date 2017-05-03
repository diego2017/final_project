import React from "react";
import HeaderContainer from "./header_container.jsx";
import _ from "lodash";
//   ^ lodash is like underscore, we need it to use _.find

export default class Details extends React.Component {
  componentWillMount(){
    let id = parseInt(this.props.routeParams.id);
    let student = _.find(this.props.route.students, (el) => el.id === id);
    this.state = {
      student: student
    }
  }

	handleSubmit = (event) => {
  event.preventDefault();
  axios.put(`http://localhost:3000/edit?student_id=${student.id}`)
  	.then(resp => {
    	this.props.onSubmit(resp.data);
    });
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
      	<input type="text"
         value={ }
         onChange={(event) => this.setState({ })}
         placeholder=" " required/>
        <button type="submit">Add card</button>
      </form>
    );
  }
}
