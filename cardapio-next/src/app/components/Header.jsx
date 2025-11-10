import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <header>
            <div className="icon">
                {/* Image Next */}
                <Image
                    src='/favicon.svg'
                    alt='Logo'
                    width={50}
                    height={50}
                />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Pratos</a></li>
                    <li><a href="#">Doces</a></li>
                    <li><a href="#">Bebidas</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header