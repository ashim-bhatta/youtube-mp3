import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Footer from '../../Component/Footer'
import InputField from '../../Component/InputField'
import Nav from '../../Component/Nav'
import './style.scss'
import { useDropzone } from 'react-dropzone'

const Profile = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  const [file, setFile] = useState(null)

  useEffect(() => {
    const files = acceptedFiles.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    )
    console.log('files', files)
    setFile(files[0])
  }, [acceptedFiles])

  console.log({ file })

  return (
    <div className='profile center'>
      <Nav />
      <div className='profile__container '>
        <div className='profile__image-container center'>
          <div className='profile__image-container__col center'>
            <img
              className='profile__image'
              src={
                file
                  ? file?.preview
                  : 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
              }
              alt='profile'
            />
            <div>
              <div
                {...getRootProps({
                  className: 'profile__image__upload-btn btn center',
                })}
              >
                <input {...getInputProps()} />
                <p>Upload new photo</p>
              </div>
              {/* Upload new photo */}
            </div>
            {/* <section className='container'>
              
            </section> */}
          </div>

          <div className='profile__logout-btn center'>
            <h4>Log Out </h4> <BsArrowRight />
          </div>
        </div>

        <div className='profile__information'>
          <h3 className='profile__information__title'>Profile Information</h3>

          <div className='profile__information__form'>
            <InputField inputType='text' lable='First Name' isGrey />
            <InputField inputType='text' lable='Last Name' isGrey />
            <InputField inputType='email' lable='Email' isGrey />
          </div>
        </div>

        <div className='profile__information'>
          <h3 className='profile__information__title'>
            Destination Information
          </h3>

          <div className='profile__information__form'>
            <InputField inputType='text' lable='Country' isGrey />
            <InputField inputType='text' lable='City' isGrey />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
