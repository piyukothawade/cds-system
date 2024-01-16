import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsSearch, BsJustify } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../App.css';
import '../assets/css/theme.css';
import { logoutUser } from '../Store/userReducer';

function Header({ OpenSidebar }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleProfileClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Perform search logic here, e.g., filter or send a search request to the server
  };

  return (
    <header className='header'>
      <div className="menu-icon">
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <div className="d-none d-md-none d-lg-block">
          {/* Form */}
          <form action="#">
            <div className="input-group ">
              <input
                className="form-control rounded-3"
                type="search"
                value={searchTerm}
                id="searchInput"
                placeholder="Search"
                onChange={handleSearch}
              />
              <span className="input-group-append">
                <button className="btn ms-n10 rounded-0 rounded-end" type="button">
                  <BsSearch />
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon icon-header' />
        <BsFillEnvelopeFill className='icon icon-header' />
        <li className="dropdown ms-2">
          <a className="rounded-circle" href="#!" role="button" id="dropdownUser"
            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="avatar-md ">
              <img alt="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvUdL40c4o2efGkY6yZ3D6uhHxabp-1QG0Wyy0dpglw&s" className="profile " />
            </div>
          </a>
          {/* Dropdown User */}
          <div className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownUser">
            <div className="px-4 pb-0 pt-2">
              <div className="lh-1 ">
                <h5 className="mb-1"> John Doe</h5>
                <a href="#!" className="text-inherit fs-6">View my profile</a>
              </div>
              <div className=" dropdown-divider mt-3 mb-2"></div>
            </div>
            <ul className="list-unstyled">
              <li>
                <a className="dropdown-item d-flex align-items-center" href="#!">
                  <BsJustify className="me-2 icon-xxs dropdown-item-icon" />
                  Edit Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  <BsJustify className="me-2 icon-xxs dropdown-item-icon" />
                  Activity Log
                </a>
              </li>
              <li>
                <Link to='/profile-setting' className="dropdown-item d-flex align-items-center" href="#!">
                  <BsJustify className="me-2 icon-xxs dropdown-item-icon" />
                  Settings
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={handleLogout}>
                  <BsJustify className="me-2 icon-xxs dropdown-item-icon" />
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </li>
      </div>
    </header>
  );
}

export default Header;
