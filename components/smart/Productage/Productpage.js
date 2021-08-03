import React, {useState, useEffect} from 'react'
import '../styles/productpage.css'
// import axios from 'axios'
// import {useTranslation} from 'react-i18next';
import ProductPageListComponent from '../../components/ProductPage/ProductPageListComponent';
import ProductPageElementComponent from '../../components/ProductPage/ProductPageElementComponent';
import ProductImageComponent from '../../components/Images/ProductImageComponent'
import ProductTitleComponent from '../../components/Title/ProductTitleComponent';
import ProductCostComponent from '../../components/ProductPage/ProductCostComponent';
import BuyButtonPage from '../pages/Buttons/BuyButtonPage'
import ToCartButtonPage from './Buttons/ToCartButtonPage';
import ProductDescComponent from '../../components/Descriptions/ProductDescListComponent'
import ProductBigTitle from '../../components/ProductPage/ProductBigTitle';
// import UnderMenu from '../components/underMenu';

const Productpage = (props) => {

    const [underCategory, setUnderCategories] = useState([])
    const { t } = useTranslation();
    const [id,setId] = useState(props.id || 1);

    useEffect(()=> {
        axios.get(process.env.BASE_URL+`/under-categories/`+ id)
        .then(res => {
            console.log(res.data)
          setUnderCategories(res.data.products)
        })
        .catch((error) => console.log(error.message));
    },[])
   

    return (
        <>

            <div className='product-page'>
                <div className='product-page_title' onClick={() => console.log(underCategory[0].Descriptions.split('\n'))}>
                    {t("productPageTitle")}
                </div>
                
                <div className='product-page_flex'>
                    {underCategory.map((item, key) =>
                        
                        <div key={key} className='product-page_flex_product'>
                            {/* <div className='product-page-img' style={{background: `url('${item.Photo.url}') center/100% 100% no-repeat`}}/> */}
                            
                            <div className='product-page-img_block'>
                                <img className='product-page-img' src={item.PhotoURL} />
                            </div>
                            
                            <div className='product-page_flex_product_title'>
                                {item.Name}
                            </div>

                            <div className='product-page_flex_product_under-title'>
                                From ${item.Price}
                            </div>
                            
                            <div onClick={() => buyItem(item)} className='product-page_flex_product_buy'>
                                Buy
                            </div>
                        
                            <div onClick={()=> addToCart(item)} className='product-page_flex_product_buy'>
                                Add to Cart
                            </div>

                            <div className='product-page_flex_product_desc'>
                                {item.Descriptions.split('\n').map((item,key) => 
                                    <p key={key}>- {item}</p> 
                                )}
                            </div>
                        </div>
                    
                    )}     
                </div>
            </div>
        </>
    )
}

export default Productpage
