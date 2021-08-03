import axios from 'axios';
import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {isName} from '../functions/isName'
import {isEmail} from '../functions/isEmail'
import {isPassword} from '../functions/isPassword'
import styles from '../styles/Auth.module.css'
import Navbar from '../components/smart/Navbar/navbar';
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setJwt } from '../redux/reducers/reducer'



function Signup() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.state)
  const [currentUsername, setCurrentUsername ] = useState('')
  const [currentEmail, setCurrentEmail ] = useState('')
  const [currentPassword, setCurrentPassword ] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()   


  const submit = () => {
    // axios.get(`http://localhost:1337/categories`)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    // create user
      // if(isEmail(currentEmail) && isName(currentUsername) && isPassword(currentPassword)){
    //   axios
    //   .post(process.env.BASE_URL+'/auth/local/register', {
    //     username: currentUsername,
    //     email: currentEmail,
    //     password: currentPassword,
    //   })
    //   .then(response => {
    //     dispatch(setMyJwt(response.data.jwt))
    //     router.push('/signin')
    //   })
    //   .catch(error => {
    //     setError('Something went wrong, we are so soryyyy!!!')
    //     console.log('An error occurred:', error.response);
    //   });
    console.log(currentUsername)
    console.log(currentEmail)
    console.log(currentPassword)

    if(isEmail(currentEmail) && isName(currentUsername) && isPassword(currentPassword)){
        axios
      .post(process.env.BASE_URL+'/auth/local/register', {
        username: currentUsername,
        email: currentEmail,
        password: currentPassword,
      })
      .then(response => {
        dispatch(setJwt(response.data.jwt))
        router.push('/signin')
      })
      .catch(error => {
        setError('Something went wrong, we are so soryyyy!!!')
        console.log('An error occurred:', error.response);
      });
    } else if(isName(currentUsername) == false){
      setError('Username is invalid, should be 5 characters at least')
    } else if(isEmail(currentEmail) == false) {
      setError('Email is invalid')
    } else if(isPassword(currentPassword) == false){
      setError('Password is invalid, at least 8 characters (big and small letters and numbers)')
    }


}



  return (
    <div className={state.theme == 'light' ? 'theme-light' : 'theme-dark'}>
        <div className='app'>
        </div>
        <Navbar/>

        <div className={styles["login-box"]}>
        <h2 >Signup</h2>
        
        <form>
        
            <div className={styles["user-box"]}>
                <input onChange={(event) => setCurrentUsername(event.target.value)} value={currentUsername} type="text" name='name' required />
                <label>Username</label>
            </div>
            
            <div className={styles["user-box"]}>
                <input onChange={(event) => setCurrentEmail(event.target.value)} value={currentEmail} type="text" name='name' required />
                <label>Email</label>
            </div>
            
            <div className={styles["user-box"]}>
                <input onChange={(event) => setCurrentPassword(event.target.value)} value={currentPassword} type="password" name='name' required />
                <label>Password</label>
            </div>
            
            <div className={styles['error']}>
                {error}
            </div>
            
            <div className={styles["user-box-flex"]}>
                <a onClick={submit} className={styles['user-box-flex_button']}>
                    <span />
                    <span />
                    <span />
                    <span />
                    Submit
                </a>
                <a onClick={() => router.push('/signin')} className={styles['user-box-flex_button']}>
                    Signin
                </a>
            </div>
            
        </form>
    </div>
  </div>
  );
}

Signup.propTypes = {
  setMyJwt: PropTypes.func,
  url: PropTypes.string
}

export default Signup;
