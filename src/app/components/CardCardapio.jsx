import React from 'react'
import Image from 'next/image'
import styles from './css/CardCardapio.module.css'

const CardCardapio = ({ nome, desc, img, preco, id }) => {
    return (
        <div className={styles.card}>
            <Image src={img} alt={`Imagem do ${nome}`} />
            <div className={styles.text}>
                <h3>{nome}</h3>
                <p>{desc}</p>
                <p className={styles.preco}>{preco}</p>
            </div>
        </div>
    )
}

export default CardCardapio