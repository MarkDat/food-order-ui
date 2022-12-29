import React from 'react';
import { Outlet } from 'react-router-dom';
import './orders.scss';

export default function Order() {
  return (
    <>
      <h2 className={'content-block'}>Orders</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
           <Outlet />
        </div>
      </div>
    </>
  );
};
