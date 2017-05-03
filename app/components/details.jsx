import React from "react";
import HeaderContainer from "./header_container.jsx";
import _ from "lodash";
//   ^ lodash is like underscore, we need it to use _.find

export default class Details extends React.Component {
  componentWillMount(){
    let id = parseInt(this.props.routeParams.id);
    let student = _.find(this.props.route.students, (el) => el.id === id);
    this.state = {
      student: student
    }
  }

  render(){
    let student = this.state.student;
    debugger;
    let skillsList = student.skills.map((el) => {
      return(
          <li>{el.name}</li>

      )
    });
    let interestsList = student.interests.map((el) => {
      return(
          <li>{el.name}</li>
      )
    });
    return(
      <div>
        <HeaderContainer />
        <div className="ui items">
          <div className="item">
            <div className="content">

            <div className="photoBox">
              <div className="photo">
                <img src={student.img_url}></img>
              </div>
              <div className="content name">
                <a className="photoName">{student.first_name} {student.last_name}</a>
              </div>
            </div>

            <br/>
              <div className="detailsBox">
                <div className="meta">
                  <span>Bio</span>
                </div>
                <div className="description">
                  <p>{student.bio}</p>
                </div>
              </div>
              <br/>
              <div className="detailsBox">
                <div className="meta">
                  <span>Skills</span>
                </div>
                <div className="description">
                  <ul>{ skillsList }</ul>
                </div>
              </div>
              <br/>
              <div className="detailsBox">
                <div className="meta">
                  <span>Interests</span>
                </div>
                <div className="description">
                  <ul>{ interestsList }</ul>
                </div>
              </div>
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }  // close render
}
