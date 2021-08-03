import React from 'react'

const productPageElementComponent = (props) => {
    return (
        <div className='product-page_flex_product'>
            {props.children}
        </div>
    )
}

export default productPageElementComponent
