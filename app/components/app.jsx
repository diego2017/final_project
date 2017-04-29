import React from "react";
import HeaderContainer from "./header_container.jsx";
import FilterContainer from "./filter_container.jsx";
import AlumniListContainer from "./alumni_list_container.jsx";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      students: [
        {
          first_name: "Diego",
          last_name: "Villanueva",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAw2AAAAJDgyMGQyMTk5LTU4NDgtNGZhMC05NzU5LWI1OWIxZGQzNDdjYQ.jpg",
          skills: ["Javascript", "CSS", "React"],
          interests: ["movies", "pubs", "travelling"]
        },
        {
          first_name: "Jin",
          last_name: "Liaskos",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAvTAAAAJGM2MjZlZTE2LWNiZDMtNDI4NC04ZDNjLWU0NTU4ZGZmZTc3ZQ.jpg",
          skills: ["CSS", "Graphic Design", "3d Models"],
          interests: ["restaurants", "cooking", "reading"]
        },
        {
          first_name: "Kevin",
          last_name: "Li",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          image_url: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAyAAAAAJDRiYjQyZmUzLWU4YTAtNDJkYS04YTcxLWFlMDM5ZDgwNTRmNQ.jpg",
          skills: ["React", "Javascript", "Backbone"],
          interests: ["hiking", "watching TV", "coding"]
        }
      ]   // close students array
    }  // close this state
  }  // close constructor
  render(){
    return(
      <div>
        <HeaderContainer/>
        <FilterContainer/>
        <AlumniListContainer students={this.state.students}/>
      </div>
    );
  }  // close render
}
