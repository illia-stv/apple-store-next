import React from 'react'

const productPageListComponent = (props) => {
    return (
        <div className='product-page_flex'>
            {props.children}
        </div>
    )
}

export default productPageListComponent
