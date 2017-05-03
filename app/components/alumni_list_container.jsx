import React from "react";
import AlumniCard from "./alumni_card.jsx"

export default class AlumniListContainer extends React.Component {

  render(){
    let studentList = this.props.students.map((el) => {
      return(<AlumniCard student={el} />)
    })

    return(
      <div>
        <h1>Alumni List</h1>
        <div className="ui doubling cards">
          { studentList }
        </div>
      </div>
    );
  }
}
