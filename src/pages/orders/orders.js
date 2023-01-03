import React from 'react';
import { Outlet } from 'react-router-dom';
import './orders.scss';

export default function Order() {
  return (
    <>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings order-page'}>
           <Outlet />
        </div>
      </div>
    </>
  );
};
