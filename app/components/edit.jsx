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

    // Get the valeus from the input fields
    let newBio = this.refs.bio.value;
    alert(newBio);

    // Make an AXIOS post request to the backend api to save the values from the input fields
    Axios.post('http://localhost:3000/students/10', {},
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        params: {bio: newBio}
      }
    )
    .then(function (data) {
      // setState of the component with the new props
      let student = _.find(this.props.route.students, (el) => el.id === window.currentUser.id)

      // by changing a property of the students object, we are actually changing the property in
      // the original this.props.route.students[i], because students is a REFERENCE to that structure
      // .... and after this.props.route.students is changed, that change will be picked up in the
      // .. componentWillMount method of the details.jsx component before it's re-rendered
      student['bio'] = newBio;

      console.log( data );
      debugger;
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });



  }

  render(){
    let student = this.state.student;
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

    let bio = null;
    bio = <textarea className="edit text"   ref="bio" defaultValue={student.bio}/>


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
            <button className="ui primary button" onClick={this.handleSaveClick.bind(this)}>
              SAVE
            </button>
            <br/>
            <br/>
              <div className="detailsBox">
                <div className="meta">
                  <span>About me</span>
                </div>
                <div className="description">
                  {bio}
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
