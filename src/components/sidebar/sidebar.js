import React from "react";
import CountriesList from '../countries/countries-list';

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar py-3">
        <h2 className="sidebar-heading">Main</h2>
        <CountriesList/>
      </div>
    );
  }
}

export default SideBar;
