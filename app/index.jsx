import React from 'react';

import ReactDOM from 'react-dom';

import RouteApp from "./RouteApp";

const renderApp = () => {
  ReactDOM.render(
    <RouteApp/>,
    document.getElementById('app')
  )
};

renderApp();
