import React from "react";
import HeaderContainer from "./header_container.jsx";
import FilterContainer from "./filter_container.jsx";
import AlumniListContainer from "./alumni_list_container.jsx";

export default class App extends React.Component {
  render(){
    return(
      <div>
        <HeaderContainer/>
        <FilterContainer/>
        <AlumniListContainer students={this.props.route.students}/>
      </div>
    );
  }  // close render
}
