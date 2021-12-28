import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import InputField from '../../Component/InputField'
import { combineReducersType } from '../../Redux'

import './style.scss'

const Login = () => {
  const { theme } = useSelector((state: combineReducersType) => state?.theme)
  const handleNavigate = () => {}

  return (
    <div className='login-container center'>
      <div className='login'>
        {/* login background */}
        <div className='login__background center'>
          <p className='login__background__title'>r.e.c.</p>

          <h3 className='login__background__greating'>Hello!</h3>

          <p className='login__background__intro'>
            Congratulation on your return! <br />
            We have prepared the latest novelties of the world of vinyl records
            personally for you and collected what you love so much.
          </p>

          <p className='login__background__new-account '>
            Don't have an account?
            <Link to='/signup' className='login__background__new-account__link'>
              Sign Up
            </Link>
          </p>
          <div className='login__background__static-content-link'>
            <a
              href='#'
              className='login__background__static-content-link___terms'
            >
              Terms of Use
            </a>
            <a
              href='#'
              className='login__background__static-content-link___privicy'
            >
              Privicy Policy
            </a>
          </div>
        </div>

        {/* login form */}
        <div className='login__forms-container center'>
          <h2 className='login__forms-container-title'>Sign In</h2>
          <form className='login__forms-container__form center'>
            <InputField lable='Email' inputType='email' />
            <InputField lable='Password' inputType='password' />

            <button className='btn login__forms-container__form__submit-button'>
              Sign In
            </button>
            <p className='login__forms-container__form__forget-password'>
              Forget Password?
            </p>
            <button className='btn login__forms-container__form__google-login center'>
              <img
                className=' login__forms-container__form__google-login__icon'
                src={require('../../Assets/Images/googleLogo.jpg')}
                alt='google image'
              />
              <p>Continue with Google</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
