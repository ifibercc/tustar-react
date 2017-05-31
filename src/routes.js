import React from 'react';
import {Route} from 'react-router-dom';
import Public from './components/Public';
import Login from './components/Login';

const RouterContainer = () => {
  return (
      <div>
        <Route path="/public" component={Public}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
  );
};
export default RouterContainer;
