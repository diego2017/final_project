import React from "react";

export default class Filter extends React.Component{
  render(){
    let filterCohort = <select className="ui search floating dropdown" ref="filterCohort" onChange={this.props.setCohort}>
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

    return(

      <div id="filterDiv">
        <br/>
        <div>
          <div className="ui left action input">
            <button className="ui grey labeled icon button">
              <i className="student icon"></i>
              Filter
            </button>
            {filterCohort}
          </div>

        </div>
      </div>
    )
  }
}
