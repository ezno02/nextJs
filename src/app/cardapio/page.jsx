import React from 'react'
import Header from "../components/Header";
import Main from '../components/Main';
import styles from './cardapio.module.css'

const page = () => {
    return (
        // classe pluralizada que evita undefined no styles.container
        <div className={`${styles.container !== undefined ? styles.container : ''} global__container cardapio`}>
            <Header />
            <Main />
        </div>
    )
}

export default page