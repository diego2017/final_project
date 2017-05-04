import React from "react";
import HeaderContainer from "./header_container.jsx";
import FilterContainer from "./filter_container.jsx";
import AlumniListContainer from "./alumni_list_container.jsx";
import _ from "lodash";

export default class App extends React.Component {

  render(){
    console.log( this )

    return(
      <div>
        <HeaderContainer/>
        <FilterContainer/>
        <AlumniListContainer students={this.props.route.students}/>
      </div>
    );
  }  // close render
}
