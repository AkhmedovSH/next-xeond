'use client'

import Image from 'next/image'
import Link from 'next/link'

function Header() {

    function onScroll(id) {
        const element = document.getElementById(id)
        if (element) {
            window.scrollTo(0, element.offsetTop - 200)
        }
    }

    return (
        <>
            <div className="header_wrapper">
                <div className="header">
                    <Link href="/">
                        <Image src="/assets/icons/header_logo.svg" width={130} height={50} alt="" />
                    </Link>
                    <div className="header_menu">
                        <div className="header_menu_item">
                            <div onClick={() => onScroll('services')}>услуги</div>
                        </div>
                        <div className="header_menu_item">
                            <div onClick={() => onScroll('owners')}>портфолио</div>
                        </div>
                        <div className="header_menu_item">
                            <a onClick={() => onScroll('about_us')}>о нас</a>
                        </div>
                    </div>
                </div>
                <a href="tel:+998909324939" className="header_btn">
                    <button>
                        контакты
                    </button>
                </a>
            </div>
        </>
    )
}

export default Header