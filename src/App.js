import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Navbar from './Navbar'
import Pad from './Pad'
import Posts from './Posts'
import NotFound from './NotFound';
import Edit from './Edit'

function App() {
  return (
    <div className='px-8 sm:px-2 md:px-4 lg:px-12 xl:px-16'>
      <Navbar/>
      <Switch>
      <Route exact path='/'><Posts/></Route>
      <Route path='/write'><Pad/></Route>
      <Route path='/edit/:id' ><Edit/></Route>
      <Route><NotFound/></Route>
      </Switch>
    </div>
  );
}

export default App;
