import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './footer';

function NonAuthLayout() {
  return (
    <>
      <div className="container-lg d-flex justify-content-center my-4">
        <Outlet />
      </div>
      <Footer title="Đây là trang đăng ký - đăng nhập" />
    </>
  );
}

export default NonAuthLayout;
