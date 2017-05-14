import React from "react";

export default class Header extends React.Component{
  render(){
    return(
      // <div id="headerDiv">
      //   <h1>Ga Index</h1>
      // </div>
      <div>
        <div className="ui red fixed inverted menu redMenu">
              <a href="#/">
                <img id="gaLogo" width="50" height="45" src="http://www.poncecitymarket.com/content/uploads/general_assembly_logo-e1465576797290-268x224.png"></img>
              </a>
            <a className="item" href="#/">
              Alumni Index
            </a>
            <div className="right menu">
              <a className="item" href={"#/edit/" + window.currentUser.id}>
                Edit  Profile
              </a>

              <a className="item" id="signout" href="#" onClick={this.signOut}>
                Signout
              </a>
            </div>

        </div>
        <div className="header-spacer"></div>
      </div>
    )
  }
  //
  // EditProfile(){
  //
  // }

  signOut(){
    Axios.get(API_HOST + "/signout");
    IN.User.logout(() => {window.location = "/"})
  }
}
