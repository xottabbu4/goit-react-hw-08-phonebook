
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.links}>
      <NavLink
        className={css.link}
        to="/"
        style={({ isActive }) => ({
          fontWeight: isActive ? '700' : '400',
          background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        })}
      >Home</NavLink>
      {isLoggedIn && <NavLink
          className={css.link}
          to="/contacts"
          style={({ isActive }) => ({
            fontWeight: isActive ? '700' : '400',
            background: isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
          })}
        >Contacts</NavLink>}
    </nav>
  );
};
