import React from "react";
import CountriesList from '../countries/countries-list';

const SideBar = (props) => {
  return (
    <div className="sidebar py-3">
      <h2 className="sidebar-heading">Main Countries</h2>
      <CountriesList/>
    </div>
  )
}

export default SideBar;
