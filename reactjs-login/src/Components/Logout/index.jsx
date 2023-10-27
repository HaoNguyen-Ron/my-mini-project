import { LOCATION } from 'constants';
import { DEFAULT } from 'constants';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();

    const token = window.localStorage.getItem(DEFAULT.TOKEN);
  
    const handleLogout = () => {
      window.localStorage.clear(token)
      navigate(LOCATION.LOGIN)
    }
  return (
    <div>
        <h1 className='mb-4'> Bạn có thật sự muốn đăng xuất ?</h1>
        <button className='btn btn-secondary' onClick={handleLogout}> Đăng xuất </button>
    </div>
  )
}
