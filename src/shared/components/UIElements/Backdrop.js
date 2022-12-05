import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = ({ closeDrawer }) => {
  const content =( <div className="backdrop" onClick={closeDrawer}></div> );

  return ReactDOM.createPortal(content, document.getElementById('backdrop-hook')
  );
};

export default Backdrop;
