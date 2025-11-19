import React from 'react'
import styles from './css/Main.module.css'
import CardCardapio from './CardCardapio'
import { pratos } from '../_datas/DataCardapio'

const Main = () => {
    return (
        <main>
            <div className={styles.box}>
                <h2>cardapio tipo</h2>

                <div className={styles.cards}>
                    {pratos.map((pratos) => (
                        <CardCardapio
                            nome={pratos.nome}
                            desc={pratos.desc}
                            img={pratos.img}
                            preco={pratos.preco}
                            id={pratos.id}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Main