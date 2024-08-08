import { useForm } from 'react-hook-form';

import { login } from '../services/LoginService';

const initialForm = {
  username: '',
  password: '',
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: initialForm, mode: 'onChange' });

  const onSubmit = async (data) => {
    console.log('--- onsubmit data: ', data);
    login(data);
  };

  return (
    <>
      <div className="App">
        <h2> Tekrar Haftası</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              {...register('username', {
                required: 'username is required',
                minLength: {
                  value: 8,
                  message: 'at least 8Characters',
                },
              })}
            />
          </div>
          {errors.username && <p>{errors.username.message}</p>}

          <div>
            <label htmlFor="password">Şifre</label>
            <input
              id="password"
              type="password"
              {...register('password', {
                required: 'password is required',
                minLength: {
                  value: 5,
                  message: 'at least 5 Characters',
                },
              })}
            />
          </div>
          {errors.password && <p>{errors.password.message}</p>}

          {isSubmitting ? 'loading...' : <input type="submit" />}
        </form>
      </div>
    </>
  );
}

export default Login;
