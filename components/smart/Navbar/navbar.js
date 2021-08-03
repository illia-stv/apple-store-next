import React, {useState} from 'react'
import styles from  '../../../styles/Navbar.module.css'
import AppleLogo from '../../../assets/svg/apple.svg';
import LngLogo from '../../../assets/svg/language.svg';
import ShoppingCart from '../../../assets/svg/shopping-cart.svg';
import Logout from '../../../assets/svg/logout.svg';
import { useRouter } from 'next/router'
// import PropTypes from 'prop-types';
import i18n from "i18next";
// import Navloader from './navloader';
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../../../redux/reducers/reducer'

export default function Navbar (){
    const dispatch = useDispatch()
    const state = useSelector((state) => state.state)
    const router = useRouter()
    const [navbar, setNavbar] = useState(false)
    
    const logout = () => {
        console.log('logout')
    }


    const changeTheme = () => {
        if(state.theme == 'light'){
            dispatch(setTheme('dark'))
        } else {
            dispatch(setTheme('light'))
        }
        // console.log('changeTheme')
    }


    return (
        <>
            <nav  className={styles['navbar']}>
              
                <div className={styles['navbar-menu']}>
                    <div onClick={() => router.push('/')} className={styles['AppleLogo']}>
                        <AppleLogo width={'20px'} fill={'#ddd'} />
                    </div>
                    
                    <div onClick={() => router.push('/products/iphone')} className={styles['navbar_navbar-menu_title']}>
                        iPhone
                    </div>  
                    <div onClick={() => router.push('/products/imac')} className={styles['navbar_navbar-menu_title']}>
                        iMac
                    </div>  
                    <div onClick={() => router.push('/products/watch')} className={styles['navbar_navbar-menu_title']}>
                        Watch
                    </div>  
                    <div onClick={() => router.push('/products/ipad')} className={styles['navbar_navbar-menu_title']}>
                        iPad
                    </div>  
                    <div onClick={() => router.push('/cart')} className={styles['navbar_navbar-menu_title']}>
                        <div className={styles['cart_logo']}>
                            <ShoppingCart width={'20px'} fill={'#ddd'}/>
                        </div>
                    </div>
                    <div  className={styles['navbar_navbar-menu_dropdown']}>
                        <div className={styles["lng_logo"]}>
                            <LngLogo width={'20px'} fill={'#ddd'}/>
                        </div>
                        
                        <div className={styles["navbar_navbar-menu_dropdown-content"]}>
                            <div onClick={() => i18n.changeLanguage('pl')}>Pl</div>
                            <div onClick={() => i18n.changeLanguage('en')}>Eng</div>
                            <div onClick={() => i18n.changeLanguage('ru')}>Rus</div>
                            <div onClick={() => i18n.changeLanguage('fr')}>Fr</div>
                        </div>
                    </div>
                    <div onClick={() => logout()} className={styles['navbar_navbar-menu_title']}>
                        <div className={styles['logout_logo']}>
                            <Logout width={'20px'} fill={'#ddd'}/>
                        </div>
                    </div>
                    <label  id={styles["switch"]} className={styles["switch"]}>
                        <input onClick={changeTheme} type="checkbox" className={styles["slider"]} />
                        <div className={styles["sliderr"]}></div>
                        <span className={styles["slider round"]} />
                    </label>
                </div>
                
            </nav>
            <nav onClick={navbar ? () => setNavbar(!navbar) : null} className={styles['navbar-resp']}>
                
                <div onClick={() => setNavbar(!navbar)} className={styles["navbar-resp_burger"]}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                
                <div onClick={() => router.push('/home')} className={styles['AppleLogo']}>
                    <AppleLogo width={'20px'} fill={'#ddd'} />
                </div>

                <label id="switch" className={styles["switch"]}>
                    <input onClick={changeTheme} type="checkbox" id={styles["slider"]} />
                    <span className={styles["slider round"]} />
                </label>
                
            </nav>
            <div onClick={() => setNavbar(!navbar)} className={navbar ? styles['navbar-harmonic_on'] : styles['navbar-harmonic_off']}>
                <div className={['navbar-wrap']}>
                <div onClick={() => router.push('/products/iphone')} className={styles['navbar_navbar-menu_title']}>
                        iPhone
                    </div>  
                    <div onClick={() => router.push('/products/imac')} className={styles['navbar_navbar-menu_title']}>
                        iMac
                    </div>  
                    <div onClick={() => router.push('/products/watch')} className={styles['navbar_navbar-menu_title']}>
                        Watch
                    </div>  
                    <div onClick={() => router.push('/products/ipad')} className={styles['navbar_navbar-menu_title']}>
                        iPad
                    </div>  

                    <div onClick={() => router.push('/cart')} className={styles['navbar_navbar-menu_title']}>
                        <div className={styles['cart_logo']}>
                            <ShoppingCart width={'20px'} fill={'#ddd'}/>
                        </div>
                    </div>
                    <div onClick={() => logout()} className={styles['navbar_navbar-menu_title']}>
                        <div className={styles['logout_logo']}>
                        <Logout width={'20px'} fill={'#ddd'}/>
                        </div>
                    </div>
                    <div  className={styles['navbar_navbar-menu_dropdown']}>
                        <div className={styles["lng_logo"]}>
                            <LngLogo width={'20px'} fill={'#ddd'}/>
                        </div>
                        
                        <div className={styles["navbar_navbar-menu_dropdown-content"]}>
                            <div onClick={() => i18n.changeLanguage('pl')}>Pl</div>
                            <div onClick={() => i18n.changeLanguage('en')}>Eng</div>
                            <div onClick={() => i18n.changeLanguage('ru')}>Rus</div>
                            <div onClick={() => i18n.changeLanguage('fr')}>Fr</div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        </>
    )
}

// Navbar.propTypes = {
//     menuCategories: PropTypes.array,
//     lng: PropTypes.string,
//     setLng: PropTypes.func,
//     logout: PropTypes.func,
//     changeTheme: PropTypes.func,
//     uploaded: PropTypes.bool
//   }


