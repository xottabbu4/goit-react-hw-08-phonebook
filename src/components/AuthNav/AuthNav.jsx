
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.links}>
      <NavLink
        className={css.link}
        to="/register"
        style={({ isActive }) => ({
          fontWeight: isActive ? '700' : '400',
          background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        })}
      >Register</NavLink>
      <NavLink
        className={css.link}
        to="/login"
        style={({ isActive }) => ({
          fontWeight: isActive ? '700' : '400',
          background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        })}
      >Log In</NavLink>
    </div>
  );
};