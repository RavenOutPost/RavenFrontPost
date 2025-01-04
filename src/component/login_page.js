import { Formik } from 'formik';
import { auth } from '../api/api';

export const LoginPage =  ({setAuth}) => {

return (
  <div class=' bg-white m-auto bottom-10 p-10 rounded-md shadow-md shadow-gray-800 w-1/2 mt-10'>
    <div class='text-4xl text-center w-full px-10'>Se connecter</div>
<Formik

  initialValues={{ name: '', password: '' }}
  validate={values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } 
    return errors;
  }}
  onSubmit={async (values, { setSubmitting }) => {
    let result = await auth(values)
    if (result) {
      localStorage.setItem('token', result)
      setAuth(true)
    }
  }}
>
  {({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    /* and other goodies */
  }) => (
    <div > 

    <form onSubmit={handleSubmit} class='flex flex-col gap-5' >
      <div class='flex flex-row content-center gap-10'>
      <label htmlFor='name' class='w-1/4'>Nom</label>
      <input
      class='border-b-2 border-solid border-slate-100 w-64 bg-slate-50 rounded-md p-2 flex-1'
        type="name"
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        />
        </div>
      {errors.name && touched.name && errors.name}
      <div class='flex flex-row content-center gap-10'>
      <label htmlFor='password' class='w-1/4'>Mot de passe</label>
      <input
      class='border-b-2 border-solid border-slate-100 w-64 bg-slate-50 rounded-md p-2 flex-1'
      type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        />
        </div>
      {errors.password && touched.password && errors.password}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
    </div>

  )}
</Formik>
</div>

)
}