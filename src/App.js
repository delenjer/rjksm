import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ModalContainer } from 'react-router-modal';
import { Home } from './components/Home/Home';
import { PopupInfo } from './components/PopupInfo/PopupInfo';
import { Details } from './components/Details/Details';
import { Favorite } from './components/Favorite/Favorite';

import './App.scss';
// import 'react-router-modal/css/react-router-modal.css';

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id/modal" component={PopupInfo} />
      <Route path="/favorite" component={Favorite} />
      <Route path="/:id" component={Details} />
    </Switch>

    <ModalContainer />
  </>
);

export default App;
