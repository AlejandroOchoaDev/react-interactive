import React from 'react';

const navElement=({text})=>(

<li className="nav-item active">
  <a className="nav-link" href="/">{text}<span className="sr-only">(current)</span></a>
</li>
);

export default navElement;
