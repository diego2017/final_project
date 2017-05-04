import React from "react";

export default class Header extends React.Component{
  render(){
    return(
      // <div id="headerDiv">
      //   <h1>Ga Index</h1>
      // </div>
      <div>
        <div className="ui red fixed inverted menu redMenu">

              <img width="50" height="45" src="http://www.poncecitymarket.com/content/uploads/general_assembly_logo-e1465576797290-268x224.png"></img>
            <a className="item" href="#/">
              Alumni Index
            </a>
            <a className="item" href={"#/edit/" + window.currentUser.id}>
              Edit Your Profile
            </a>

            <a className="item" href="#" onClick={this.signOut}>
              Signout
            </a>

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
