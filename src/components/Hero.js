import React from 'react'

function Hero({children}) {
    return (
        <header className="defaultHero">
            {children}
        </header>
    )
}

export default Hero
