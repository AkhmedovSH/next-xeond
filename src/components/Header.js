import React from 'react'
import { useTheme } from '../ThemeContext';

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header>
            <img src="./icons/logo_text.svg" alt="Логотип xeond" width={108} height={30} />

            <div className="right">
                <a href="/uz">
                    <button className="header-button">
                        RU
                    </button>
                </a>

                <button className="header-button" onClick={toggleTheme}>
                    {theme === 'light' ?
                        <img src="./icons/dark.svg" alt="" width={24} height={24} />
                        :
                        <img src="./icons/light.svg" alt="" width={24} height={24} />
                    }
                </button>
            </div>
        </header>
    )
}

export default Header