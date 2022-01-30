import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';
import ShoppingPage from '../pages/ShoppingPage';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/user' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                User
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<ShoppingPage />} />
          <Route path='/about' element={<h2> About Page</h2>} />
          <Route path='/user' element={<h2> User Page</h2>} />
          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
