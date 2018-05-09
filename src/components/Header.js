import React from "react";
import './Header.css';
import { Link }  from 'react-router-dom';

const MenuItem = ({active, children, to})  => (
  <Link to={to} className ="menu-item">
    {children}
  </Link>
)

const Header = () => {
  return (
    <div>
      <div className="logo">
          Loge
      </div>
      <div className="menu">
        <MenuItem to="/">홈</MenuItem>
        <MenuItem to="/about">소개</MenuItem>
        <MenuItem to="/post">포스트</MenuItem>
        <MenuItem to="/login">로그인</MenuItem>
      </div>
    </div>
  )
}

export default Header;
