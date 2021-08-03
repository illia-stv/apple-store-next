import React from 'react'
import {useTranslation} from 'react-i18next';
import styles from '../../../styles/Home.module.css'
import { useSelector } from 'react-redux'


const Homepage = () => {
    const state = useSelector((state) => state.state)
    const { t } = useTranslation();

    return (
        <main>
            { state.theme == 'light' 
                ? 
                <div className={styles.intro}>
                <div className={styles['introduce-img']}>
                </div>
                <div className={styles["intro-box"]}>
                    <h2 >iPhone 12</h2>
                    
                    <h3>{t("titles.part1")}</h3>
                    <h4>
                        {t("descs.part1")}
                    </h4>     
                </div>
                </div>
                :
                null
            }
           <div className={styles["iphone12"]}>
                <div className={styles["iphon12-section_img"]}>
                </div>

                <div className={styles["iphon12-section"]}>
                    <div className={styles["iphon12-section_info-section"]}>
                        
                        <h2>iPhone 12 Pro</h2>
                        
                        <h3>{t("titles.part2")}</h3>
                        
                        <h4>
                            {t("descs.part2")}
                        </h4>

                        

                    </div>
                </div>
           </div>

           <div className={styles["iPadPro"]}>
                <div className={styles["iPadPro-section_img"]}>
                </div>

                <div className={styles["iPadPro-section"]}>
                    <div className={styles["iPadPro-section_info-section"]}>
                        
                        <h2>iPad Pro</h2>
                        
                        <h3>{t("titles.part3")}</h3>
                        
                    </div>
                </div>
           </div>
      </main>

    )
}

export default Homepage
