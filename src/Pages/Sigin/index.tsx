import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import InputField from '../../Component/InputField'
import { combineReducersType } from '../../Redux'

import './style.scss'

const SignUp = () => {
  const { theme } = useSelector((state: combineReducersType) => state?.theme)
  const handleNavigate = () => {}

  return (
    <div className='signup-container center'>
      <div className='signup'>
        {/* signup form */}
        <div className='signup__forms-container center'>
          <h2 className='signup__forms-container-title'>Sign Up</h2>
          <form className='signup__forms-container__form center'>
            <InputField lable='Email' inputType='email' />
            <InputField lable='Password' inputType='password' />
            <InputField lable='Confirm Password' inputType='password' />

            <button className='btn signup__forms-container__form__submit-button'>
              Sign Up
            </button>
            {/* <p className='signup__forms-container__form__forget-password'>
              Forget Password?
            </p> */}
            <button className='btn signup__forms-container__form__google-login center'>
              <img
                className=' signup__forms-container__form__google-login__icon'
                src={require('../../Assets/Images/googleLogo.jpg')}
                alt='google image'
              />
              <p>Continue with Google</p>
            </button>
          </form>
        </div>

        {/* signup background */}
        <div className='signup__background center'>
          <p className='signup__background__title'>r.e.c.</p>

          <h3 className='signup__background__greating'>Create New Account!</h3>

          <p className='signup__background__intro'>
            Immerse yourself in the world of quality musics on vinyl records.
            Listen, choose, take what you like. Every day we replenish the store
            with new products.
          </p>

          <p className='signup__background__new-account '>
            Alredy have an account?
            <Link to='/login' className='signup__background__new-account__link'>
              Sign In
            </Link>
          </p>
          <div className='signup__background__static-content-link'>
            <a
              href='#'
              className='signup__background__static-content-link___terms'
            >
              Terms of Use
            </a>
            <a
              href='#'
              className='signup__background__static-content-link___privicy'
            >
              Privicy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
