import React from 'react'
import {useTranslation} from 'react-i18next';


const ProductBigTitle = () => {
    
    const { t } = useTranslation();
    
    return (
        <div className='product-page'>
            <div className='product-page_title' >
                {t("productPageTitle")}
            </div>
        </div>
    )
}

export default ProductBigTitle
