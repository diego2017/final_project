import React from "react";
import AlumniCard from "./alumni_card.jsx"

export default class AlumniListContainer extends React.Component {
  render(){
    let studentList = this.props.students.map((el) => {
      // debugger;
      return(<AlumniCard student={el} />)
    })

    // console.log(this.props.foo); // => 1234

    return(
      <div>
        <h1>Alumni List</h1>
        { studentList }
      </div>
    );
  }
}
