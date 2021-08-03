import React, {useState, useEffect} from 'react'
// import styles from '../../styles/Productpage.modules.css'
import styles from '../../styles/Productpage.module.css'
import axios from 'axios'
import {useTranslation} from 'react-i18next';
import Navbar from '../../components/smart/Navbar/navbar'
import UnderMenu from '../../components/smart/Undermenu/Undermenu';
import { useSelector, useDispatch } from 'react-redux'
import { setCart } from '../../redux/reducers/reducer'
// import UnderMenu from '../components/underMenu';

const ProductIphone = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.state)
    const [categoryList, setCategoryList] = useState([])
    const [underCategory, setUnderCategories] = useState([])
    const { t } = useTranslation();
    const [id,setId] = useState(2);

    useEffect(()=> {
        axios.get(process.env.BASE_URL+`/under-categories/`+ id)
        .then(res => {
            console.log(res.data)
          setUnderCategories(res.data.products)
        })
        .catch((error) => console.log(error.message));

        axios.get(process.env.BASE_URL+`/categories/1`)
        .then(res => {
            console.log(res.data)
          setCategoryList(res.data['under_categories'].map((item) => [item.Name,item.id]))
        })
        .catch((error) => console.log(error.message));
    },[])
    
    const addToCart = (val) => {
        const arr = state.cart.filter((item)=>item.id==val.id)
        if(arr.length == 0){
          dispatch(setCart([...state.cart, val]))
        }
    } 

    const setMyId = (_id) => {
        setId(_id)
        axios.get(process.env.BASE_URL+`/under-categories/`+_id)
        .then(res => {
            console.log(res.data)
          setUnderCategories(res.data.products)
        })
        .catch((error) => console.log(error.message));
    }

    // const addToCart = (item) => {
    //     props.setCart(item)
    //     console.log(props.cart)
    // }

    const buyItem = (item) => {
        // console.log(item.Price)
        const name = item.Name.split(' ').join('').toLowerCase()
        axios.post(`https://my-apple-store-server.herokuapp.com/create-checkout-session`,{
            name: [name] 
        })
        .then(res => {
            // console.log(res.data)
            window.location.href = res.data
        })
        .catch((error) => console.log(error));
    }
    
   

    return (
        <div className={state.theme == 'light' ? 'theme-light' : 'theme-dark'}>
            <div className='app'>
            </div>
            <Navbar/>
            <UnderMenu setMyId={setMyId} categories={categoryList} />

            <div className={styles['product-page']}>
                <div className={styles['product-page_title']} onClick={() => console.log(underCategory[0].Descriptions.split('\n'))}>
                    {t("productPageTitle")}
                </div>
                
                <div className={styles['product-page_flex']}>
                    {underCategory.map((item, key) =>
                        
                        <div key={key} className={styles['product-page_flex_product']}>
                            {/* <div className='product-page-img' style={{background: `url('${item.Photo.url}') center/100% 100% no-repeat`}}/> */}
                            
                            <div className={styles['product-page-img_block']}>
                                <img className={styles['product-page-img']} src={item.PhotoURL} />
                            </div>
                            
                            <div className={styles['product-page_flex_product_title']}>
                                {item.Name}
                            </div>

                            <div className={styles['product-page_flex_product_under-title']}>
                                From ${item.Price}
                            </div>
                            
                            <div onClick={() => buyItem(item)} className={styles['product-page_flex_product_buy']}>
                                Buy
                            </div>
                        
                            <div onClick={()=> addToCart(item)} className={styles['product-page_flex_product_buy']}>
                                Add to Cart
                            </div>

                            <div className={styles['product-page_flex_product_desc']}>
                                {item.Descriptions.split('\n').map((item,key) => 
                                    <p key={key}>- {item}</p> 
                                )}
                            </div>
                        </div>
                    
                    )}     
                </div>
            </div>
        </div>
    )
}

export default ProductIphone
