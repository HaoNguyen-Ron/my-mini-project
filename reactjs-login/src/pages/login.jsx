import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { axiosClient } from 'helper/axiosClient';
import { DEFAULT, LOCATION } from 'constants/index';

function LoginPage(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onLogin = async (e) => {
    e.preventDefault();

    const url = '/admin/employees/login';
    try {
      const response = await axiosClient.post(url, user);

      localStorage.setItem(DEFAULT.TOKEN, response.data.token);
      localStorage.setItem(DEFAULT.REFRESH_TOKEN, response.data.refreshToken);

      if (response && response.data.token) {
        navigate(LOCATION.HOME);
      }
    } catch (error) {
    }
  };

  const onChange = (e, fieldName) => {
    setUser((prev) => ({
      ...prev,
      [fieldName]: e.target.value,
    }));
  };

  const token = localStorage.getItem(DEFAULT.TOKEN);

  useEffect(() => {
    if (token) {
      navigate(LOCATION.HOME);
    }
  }, [navigate, token]);

  return (
    <>
      <h1>Đăng nhập</h1>
      <form className="p-5" onSubmit={onLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.email}
            onChange={(e) => onChange(e, 'email')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={user.password}
            onChange={(e) => onChange(e, 'password')}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default LoginPage;