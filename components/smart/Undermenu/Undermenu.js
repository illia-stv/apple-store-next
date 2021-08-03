import React from 'react'
import styles from '../../../styles/Undermenu.module.css'
import PropTypes from 'prop-types';

const UnderMenu = (props) => {
    

    const linkClick = (id) => {
        props.setMyId(id)
    }

    return (
        <div className={styles['under-menu']}>
            <div className={styles["under-menu_section"]}>
                
                {props.categories.map((item, key)=> 
                    <div key={key} onClick={() => linkClick(item[1])} className={styles['under-menu_section_elements']}>
                        {item[0]}
                    </div>
                )}
            </div>
        </div>
    )
}

UnderMenu.propTypes = {
    categories: PropTypes.array,
    state: PropTypes.string,
    setState: PropTypes.func,
    setMyId: PropTypes.func
}

export default UnderMenu
