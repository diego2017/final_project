import React from "react";
import HeaderContainer from "./header_container.jsx";
import _ from "lodash";
//   ^ lodash is like underscore, we need it to use _.find

export default class Edit extends React.Component {

  componentWillMount(){
    let id = parseInt(this.props.routeParams.id);
    let student = _.find(this.props.route.students, (el) => el.id === id);
    this.state = {
      student: student
    }
  }


  handleSaveClick(){

    // Get the values from the input fields
    let newCohort = this.refs.cohort.value;
    let newBio = this.refs.bio.value;
    let newSkills = this.refs.skills.value;
    let newInterests = this.refs.interests.value;
    let newLinkedin_url = this.refs.linkedin_url.value;
    let newGithub_url = this.refs.github_url.value;
    let newFacebook_url = this.refs.facebook_url.value;
    let newWebsite_url = this.refs.website_url.value;




    // Make an AXIOS post request to the backend api to save the values from the input fields
    Axios.post(API_HOST + '/students/' + window.currentUser.id, {},
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        params: {
          cohort: newCohort,
          bio: newBio,
          skills: newSkills,
          interests: newInterests,
          linkedin_url: newLinkedin_url,
          github_url: newGithub_url,
          facebook_url: newFacebook_url,
          website_url: newWebsite_url
        }
      }
    )
    .then(function (data) {
      // setState of the component with the new props
      let student = _.find(this.props.route.students, (el) => el.id === window.currentUser.id)

      // by changing a property of the students object, we are actually changing the property in
      // the original this.props.route.students[i], because students is a REFERENCE to that structure
      // .... and after this.props.route.students is changed, that change will be picked up in the
      // .. componentWillMount method of the details.jsx component before it's re-rendered
      student['cohort'] = newCohort;
      student['bio'] = newBio;
      student['skills'] = newSkills;
      student['interests'] = newInterests;
      student['linkedin_url'] = newLinkedin_url;
      student['github_url'] = newGithub_url;
      student['facebook_url'] = newFacebook_url;
      student['website_url'] = newWebsite_url;

      this.props.router.push('/details/' + window.currentUser.id);
    }.bind(this))
    .catch(function (error) {
      // console.log(error);w
    });



  }

  render(){
    let student = this.state.student;
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

    let cohort = null;
    let bio = null;
    let skills = null;
    let interests = null;
    let linkedin_url = null;
    let github_url = null;
    let facebook_url = null;
    let website_url = null;

   cohort = <select className="ui search dropdown" ref="cohort" defaultValue={student.cohort}>
     <option value="ALL">All</option>
     <option value="WDI1">WDI 1</option>
     <option value="WDI2">WDI 2</option>
     <option value="WDI3">WDI 3</option>
     <option value="WDI4">WDI 4</option>
     <option value="WDI5">WDI 5</option>
     <option value="WDI6">WDI 6</option>
     <option value="WDI7">WDI 7</option>
     <option value="WDI8">WDI 8</option>
     <option value="WDI9">WDI 9</option>
     <option value="WDI10">WDI 10</option>
     <option value="WDI11">WDI 11</option>
     <option value="WDI12">WDI 12</option>
     <option value="WDI13">WDI 13</option>
     <option value="WDI14">WDI 14</option>
     <option value="WDI15">WDI 15</option>
     <option value="WDI16">WDI 16</option>
     <option value="WDI18">WDI 18</option>
     <option value="WDI19">WDI 19</option>
     <option value="WDI20">WDI 20</option>
     <option value="WDI21">WDI 21</option>
     <option value="UXDI14">UXDI 14</option>
     <option value="UXDI15">UXDI 15</option>
     <option value="UXDI16">UXDI 16</option>
     <option value="DSI1">DSI 1</option>
     <option value="DSI2">DSI 2</option>
     <option value="STAFF">STAFF</option>
   </select>
    // cohort = <textarea className="edit text small"   ref="cohort" defaultValue={student.cohort}/>
    bio = <textarea className="edit text"   ref="bio" defaultValue={student.bio}/>
    skills = <textarea className="edit text"   ref="skills" defaultValue={student.skills}/>
    interests = <textarea className="edit text"   ref="interests" defaultValue={student.interests}/>
    linkedin_url = <textarea className="edit text small"   ref="linkedin_url" defaultValue={student.linkedin_url}/>
    github_url = <textarea className="edit text small"   ref="github_url" defaultValue={student.github_url}/>
    facebook_url = <textarea className="edit text small"   ref="facebook_url" defaultValue={student.facebook_url}/>
    website_url = <textarea className="edit text small"   ref="website_url" defaultValue={student.website_url}/>


    return(
      <div id="dcontainer">
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
            <button className="ui primary button" onClick={this.handleSaveClick.bind(this)}>
              SAVE
            </button>
            <br/>
            <br/>
              <div className="detailsBox">
                <div className="meta">
                  <span>Cohort</span>
                </div>
                <div className="description">
                  {cohort}
                </div>

                <div className="meta">
                  <span>About me</span>
                </div>
                <div className="description">
                  {bio}
                </div>
              </div>
              <br/>

              <div className="detailsBox">
                <div className="meta">
                  <span>Skills</span>
                </div>
                <div className="description">
                  {skills}
                </div>
                <div className="meta">
                  <span>Interests</span>
                </div>
                <div className="description">
                  {interests}
                </div>
              </div>
              <br/>

              <div className="detailsBox">
                <div className="meta">
                  <span>LinkedIn</span>
                </div>
                <div className="description">
                  {linkedin_url}
                </div>
                <div className="meta">
                  <span>Github</span>
                </div>
                <div className="description">
                  {github_url}
                </div>
                <div className="meta">
                  <span>Facebook</span>
                </div>
                <div className="description">
                  {facebook_url}
                </div>
                <div className="meta">
                  <span>Website</span>
                </div>
                <div className="description">
                  {website_url}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }  // close render
}
