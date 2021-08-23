import React from 'react';
import './styles/App.scss';

import HeaderApp from './components/shared/header-app';
import LayoutApp from './components/shared/layout-app';

const App = () => {
  return (
    <div className="ui">
      <HeaderApp/>
      <LayoutApp/>
    </div>
  );
};

export default App;
