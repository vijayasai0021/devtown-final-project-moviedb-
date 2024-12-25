import React from 'react';

// components
import Navbar from '../components/navbar/Navbar.Component';

import Footer from '../components/Footer.jsx';

const DefaultLayoutHOC = (Components) =>({...props})=> {
  return (
    <div>
      <Navbar/>
      <Components {...props}/>
      <div><Footer/></div>
    </div>
  );
}

export default DefaultLayoutHOC;