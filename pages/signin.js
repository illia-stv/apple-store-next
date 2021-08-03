import axios from 'axios';
import React,{useState} from 'react'
import PropTypes from 'prop-types';
import {isEmail} from '../functions/isEmail'
import styles from '../styles/Auth.module.css'
import { useRouter } from 'next/router'
import Navbar from '../components/smart/Navbar/navbar';
import { useSelector, useDispatch } from 'react-redux'
import { setJwt } from '../redux/reducers/reducer'

function Signin() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.state)
  const router = useRouter()   
  const [currentEmail, setCurrentEmail ] = useState('')
  const [currentPassword, setCurrentPassword ] = useState('')
  const [error, setError] = useState('')
    

//   const toSignup = () => {
//     history.push('/signup')
//   }

 
  const submit = () => {
    // axios.get(`http://localhost:1337/categories`)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    // create user
    
    // login


    if(isEmail(currentEmail)){
      axios
      .post(process.env.BASE_URL+'/auth/local', {
          identifier: currentEmail,
          password: currentPassword,
      })
      .then(response => {
          dispatch(setJwt(response.data.jwt))
          console.log(response.data.jwt)
          router.push('/')
          
      })
      .catch(error => {
          console.log('An error occurred:', error);
      });
    } else {
      setError('Input is invalid')
    }


}



  return (
    <div className={state.theme == 'light' ? 'theme-light' : 'theme-dark'}>
      <Navbar/>
      <div className='app'>
      </div>
      <div  className={styles["login-box"]}>
        <h2 >Signin</h2>
        <form>
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
              <a onClick={submit} className={styles['user-box-flex_button']} >
              <span />
              <span />
              <span />
              <span />
              Submit
              </a>
              <a onClick={() => router.push('/signup')} className={styles['user-box-flex_auth_button']} >
                Signup
              </a>
          </div>
        </form>
        
    </div>
  </div>
  );
}

Signin.propTypes = {
  setMyJwt: PropTypes.func,
  url: PropTypes.string
}


export default Signin;
