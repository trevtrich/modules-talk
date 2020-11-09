import React from 'react';

export default function ({children}) {
  return (
    <div style={{width: 1000, marginLeft: 80, marginRight: 40}}>
      <ul>
        {React.Children.map(children, child => (<li style={{paddingBottom: 15}}>{child}</li>))}
      </ul>
    </div>
  );
}
