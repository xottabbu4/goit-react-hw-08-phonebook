// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import css from './ContactForm.module.css';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.labelForm}>
        Username
        <input type="text" name="name" className={css.inputField} required />
      </label>
      <label className={css.labelForm}>
        Email
        <input type="email" name="email" className={css.inputField} required />
      </label>
      <label className={css.labelForm}>
        Password
        <input type="password" name="password" className={css.inputField} required />
      </label>
      <button type="submit" className={css.button}>Register</button>
    </form>
  );
};