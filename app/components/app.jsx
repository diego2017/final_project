import React from "react";
import HeaderContainer from "./header_container.jsx";
import FilterContainer from "./filter_container.jsx";
import AlumniListContainer from "./alumni_list_container.jsx";
import _ from "lodash";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      cohort: "ALL"
    };
  }

  render(){
    // console.log( this )

    return(
      <div id="dcontainer2">
        <HeaderContainer/>
        <FilterContainer setCohort={this.setCohort.bind(this)}/>
        <AlumniListContainer students={this.props.route.students} cohort={this.state.cohort}/>
      </div>
    );
  }  // close render
  setCohort(event){
    this.setState({
      cohort: event.target.value
    });
  }
}
