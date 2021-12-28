import React, { useRef, useState } from 'react'
import './style.scss'
import { AiFillEyeInvisible } from 'react-icons/ai'

type propsType = {
  lable: string
  inputType: string
}

const InputField = ({ lable, inputType }: propsType) => {
  const [lablePosition, setLablePosition] = useState('')
  const inputRef: any = useRef(null)

  const checkIfFocus = (isFocus: boolean) => {
    if (isFocus) {
      setLablePosition('active')
    } else if (inputRef.current.value.length === 0) {
      setLablePosition('')
    }
  }

  const changeInputType = () => {
    if (inputRef.current.type === 'text') {
      inputRef.current.type = 'password'
    } else {
      inputRef.current.type = 'text'
    }
  }
  return (
    <div className='login__forms-container__form__input-field'>
      <label className={lablePosition}>{lable}</label>
      <input
        className='login__forms-container__form__input-field__input'
        ref={inputRef}
        type={inputType}
        onFocus={() => checkIfFocus(true)}
        onBlur={() => checkIfFocus(false)}
      />

      {inputType === 'password' && (
        <AiFillEyeInvisible
          className='login__forms-container__form__input-field__icon'
          onClick={() => changeInputType()}
        />
      )}
    </div>
  )
}
export default InputField
