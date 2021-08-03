import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import styles from  '../styles/Cart.module.css'
// import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {useTranslation} from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/smart/Navbar/navbar';
import { setCart } from '../redux/reducers/reducer'

const Cart = (props) => {
    // const history = useHistory()
    const { t } = useTranslation();
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const state = useSelector((state) => state.state)
    // const [productsList, setProductsList] = useState([])
    const totalCost = state.cart.map((item)=>item.Price).reduce((a,b)=> a + b,0)
    
    useEffect(()=> {
        if(error !== ''){
            setError(t("addSomthingToYourCart"))
        }
    },[t("addSomthingToYourCart")])

    

    const buyItem = (item) => {
        // console.log(item.map((item)=> item.Name.split(' ').join('').toLowerCase()))
        const names = item.map((item)=> item.Name.split(' ').join('').toLowerCase())
        console.log(names)
        if(names.length !== 0){
            axios.post(`https://my-apple-store-server.herokuapp.com/create-checkout-session`,{
            name: names
            })
            .then(res => {
                // console.log(res.data)
                // setError(res.data)
                window.location.href = res.data
            })
            .catch((error) => console.log('error'));
        } else {
            setError(t("addSomthingToYourCart"))
        }       
    }


   
    return (
        <div className={state.theme == 'light' ? 'theme-light' : 'theme-dark'}>
            
            <div className='app'>
            </div>
            
            <Navbar/>

            <div className={styles['cart']}>
                <h1 className={styles['cart_title']}>{t("itemsInYourCart")}</h1>
                <div className={styles['cart_line']}></div>
                
                {
                    state.cart.map((item, i)=>
                        <div key={i} className={styles['cart_product']}>
                            <div className={styles['cart_product-block']}>
                                <img className={styles['cart_product-block_img']} src={item.PhotoURL} />
                            </div>
                            <div className={styles['cart_product-info']}>
                                <div className={styles['cart_product-info_top']}>
                                    <div className={styles['cart_product-info_top_name']}>
                                        {item.Name}
                                    </div>
                                    <div className={styles['cart_product-info_top_price']}>
                                        ${item.Price}
                                    </div>
                                </div>
                                <div className={styles['cart_product-info_bottom']}>
                                    <div className={styles['cart_product-info_bottom_desc']}>
                                        ${item.Descriptions}
                                    </div>
                                    <div onClick={() => props.delFromCart(i)} className={styles['cart_product-info_bottom_remove']}>
                                        Remove
                                    </div>
                                </div>
                            </div>             
                        </div>
                    )
                }

                <div className={styles["cart-buy-section"]}>
                    <div className={styles["cart-total"]}>{t("total")}: ${totalCost}</div>
                    <div className={styles["cart-buy"]} onClick={() => buyItem(state.cart)}>{t("buy")}</div>
                </div>
                <div className={styles["cart-error"]}>{error}</div>

                        {/* {props.cart.map((item, i)=>
                    <h1 key={i}>{item.id}</h1>
                )} */}

            </div>
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.array,
    delFromCart: PropTypes.func
}

export default Cart
