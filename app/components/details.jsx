import React from "react";
import HeaderContainer from "./header_container.jsx";

export default class Details extends React.Component {
  componentWillMount(){
    let id = this.props.routeParams.id;
  }

  render(){
    return(
      <div>
        <HeaderContainer />
        <div className="ui items">
          <div className="item">
            <div className="image">
              <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAw2AAAAJDgyMGQyMTk5LTU4NDgtNGZhMC05NzU5LWI1OWIxZGQzNDdjYQ.jpg"></img>
            </div>
            <div className="content">
              <a className="header studentName">Diego Villanueva</a>
              <div className="meta">
                <span>Bio</span>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <br/>
              <div className="meta">
                <span>Skills</span>
              </div>
              <div className="description">
                <ul>
                  <li> Javascript </li>
                  <li> CSS </li>
                  <li> React </li>
                </ul>
              </div>
              <br/>
              <div className="meta">
                <span>Interests</span>
              </div>
              <div className="description">
                <ul>
                  <li> Movies </li>
                  <li> Pubs </li>
                  <li> Travelling </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }  // close render
}
