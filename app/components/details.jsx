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
    console.log('componentWillMount RUN for Details', this.props.route.students);
  }

  render(){
    let student = this.state.student;

    ////////////// we dont need this part at the moment because the skills and interests are a temporary column in Student
    // let skillsList = student.skills.map((el) => {
    //   return(
    //       <li>{el.name}</li>
    //
    //   )
    // });
    // let interestsList = student.interests.map((el) => {
    //   return(
    //       <li>{el.name}</li>
    //   )
    // });
    //////////////

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
              <div className="meta cohort">
                  <p>{student.cohort}</p>
              </div>
            </div>

            <br/>
              <div className="detailsBox">
                <div className="meta">
                  <span>About me</span>
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
                  <p>{student.skills}</p>
                </div>
              </div>
              <br/>
              <div className="detailsBox">
                <div className="meta">
                  <span>Interests</span>
                </div>
                <div className="description">
                  <p>{student.interests}</p>
                </div>
              </div>
              <br/>
              <div className="detailsBox">
                <div className="meta">
                  <span>Contact me</span>
                </div>
                <div className="description">
                  <a href={student.linkedin_url} target="_blank"> {student.linkedin_url} </a>
                </div>
                <div className="description">
                  <a href={student.github_url} target="_blank"> {student.github_url} </a>
                </div>
                <div className="description">
                  <a href={student.facebook_url} target="_blank"> {student.facebook_url} </a>
                </div>
                <div className="description">
                  <a href={student.website_url} target="_blank"> {student.website_url} </a>
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
