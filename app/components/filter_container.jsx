import React from "react";

export default class Filter extends React.Component{
  render(){

    let filterCohort = <select className="ui search dropdown" ref="filterCohort">
      <option value="WDI19">WDI 19</option>
      <option value="WDI20">WDI 20</option>
      <option value="WDI21">WDI 21</option>
      <option value="UXDI14">UXDI 14</option>
      <option value="UXDI15">UXDI 15</option>
      <option value="UXDI16">UXDI 16</option>
      <option value="STAFF">STAFF</option>
    </select>

    return(

      <div id="filterDiv">
        <h1>Filter</h1>
        <div>
          {filterCohort}
        </div>
      </div>
    )
  }
}
