import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="row h-100">
                <div className="col-lg-6 col-sm-12 mobile-hide">
                    <p className="xeond">
                        <span className="xeond_title">
                            XEOND©
                            <span className="xeond_subtitle"> 2024</span>
                        </span>
                    </p>
                </div>

                <div className="col-lg-6 col-sm-12">
                    <div className="social-medias">
                        <a className="social-media" href="https://t.me/pdd_Uzbekiztan" target="_blank">
                            Telegram
                            <img src="./icons/telegram.svg" alt="Иконка телеграмма" />
                        </a>
                        <a className="social-media" href="https://www.instagram.com/pdd.uz" target="_blank">
                            Instagram
                            <img src="./icons/instagram.svg" alt="Иконка инстаграма" />
                        </a>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 mobile-show">
                    <p className="xeond">
                        <span className="xeond_title">
                            XEOND©
                            <span className="xeond_subtitle"> 2024</span>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer