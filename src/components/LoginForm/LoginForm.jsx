import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={css.labelForm}>
        Email
        <input type="email" name="email" className={css.inputField} required />
      </label>
      <label className={css.labelForm}>
        Password
        <input type="password" name="password" className={css.inputField} required />
      </label>
      <button className={css.button} type="submit">Log In</button>
    </form>
  );
};