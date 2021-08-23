import React from 'react';
import FooterApp from './footer-app';
import Sidebar from '../sidebar/sidebar';
import UserList from '../user/user-list';
import CountriesList from '../countries/countries-list';

class LayoutApp extends React.Component{
  render(){
    return(
      <div className="wrap-content d-flex" >
          <div className="layoutDrawer__nav">
            <Sidebar/>
          </div>
          <div className="layoutDrawer__content">
            <UserList/>
            <FooterApp/>
          </div>
      </div>
      
    )
  }
}

export default LayoutApp;