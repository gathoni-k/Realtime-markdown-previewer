import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Navbar from './Navbar'
import Pad from './Pad'

function App() {
  React.useEffect(() => {

  })
  return (
    <div className='px-8 sm:px-2 md:px-4 lg:px-12 xl:px-16'>
      <Navbar/>
      <Pad/>
    </div>
  );
}

export default App;
