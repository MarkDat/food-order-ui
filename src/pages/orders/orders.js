import React from 'react';
import { Outlet } from 'react-router-dom';
import './orders.scss';

export default function Order() {
  return (
    <>
      Order parent
      <Outlet />
    </>
  );
};
