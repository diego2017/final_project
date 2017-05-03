import React from "react";
import HeaderContainer from "./header_container.jsx";
import FilterContainer from "./filter_container.jsx";
import AlumniListContainer from "./alumni_list_container.jsx";
import _ from "lodash";

export default class App extends React.Component {

  render(){
    console.log( this )


    // var currentUser = _.find(this.props.route.students, {linkedin_id: window.studentId})


    // check here to see if we have enough data about the OAuthed student in our own DB

    //  - if not, return an extra <UpdateStudentInfoForm> component in the return() below
    //  - if we have enough, just show the usual alumni cards

    return(
      <div>
        <HeaderContainer/>
        <FilterContainer/>
        <AlumniListContainer students={this.props.route.students}/>
      </div>
    );
  }  // close render
}
