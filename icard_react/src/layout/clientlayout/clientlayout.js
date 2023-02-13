import React from 'react';
import './clientlayout.scss';

export function clientlayout(props) {
  const {children} = props;
  return (
    <div>
      <p>diseno de cliente</p>
      {children}
    </div>
  );
}
