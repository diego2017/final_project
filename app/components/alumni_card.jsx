import React from "react";

export default class AlumniCard extends React.Component {
  render(){
    return(
      // <div>
      //   <h1>{this.props.student.first_name} {this.props.student.last_name}</h1>
      //   <img src={this.props.student.image_url}></img>
      // </div>

      <div className="card">
        <div className="image">
          <img src={this.props.student.image_url}></img>
        </div>
        <div className="content">
          <a className="header" href={`#/details/${ this.props.student.id }`}>{this.props.student.first_name} {this.props.student.last_name}</a>
          <div className="meta">
              <a>{this.props.student.course}</a>
          </div>
        </div>
      </div>

    );
  }
}
