import React from 'react'
import Header from "../components/Header";
import styles from './cardapio.module.css'

const page = () => {
    return (
        // classe pluralizada que evita undefined no styles.container
        <div className={`${styles.container !== undefined ? styles.container : ''} global__container cardapio`}>
            <Header />
        </div>
    )
}

export default page