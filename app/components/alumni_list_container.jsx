import React from "react";
import AlumniCard from "./alumni_card.jsx"

export default class AlumniListContainer extends React.Component {

  render(){
    let studentFiltering = (el) => {
      if (this.props.cohort === "ALL"){
        return(<AlumniCard key={el.id} student={el} />)
      }else if(el.cohort === this.props.cohort){
        return(<AlumniCard key={el.id} student={el} />)
      };
    }

    let studentList = this.props.students.map(studentFiltering.bind(this))

    return(
      <div>
        <br/>
        <div className="ui doubling cards">
          { studentList }
        </div>
      </div>
    );
  }
}
