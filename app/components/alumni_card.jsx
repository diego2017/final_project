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
          <a className="pic" href={`#/details/${ this.props.student.id }`}>

          <img src={this.props.student.img_url} ></img>
          </a>
        </div>

        <div className="content">
          <a className="header name" href={`#/details/${ this.props.student.id }`}>{this.props.student.first_name} {this.props.student.last_name}</a>
          <div className="meta">
              <a>{this.props.student.course}</a>
          </div>
        </div>
      </div>

    );
  }
}
