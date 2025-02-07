import Image from 'next/image'
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
                        <a className="social-media" href="https://t.me/Xe0nd" target="_blank">
                            Telegram
                            <Image src="/icons/telegram.svg" alt="Иконка телеграмма" width={100} height={100} />
                        </a>
                        <a className="social-media" href="https://www.instagram.com/xeond?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                            Instagram
                            <Image src="/icons/instagram.svg" alt="Иконка инстаграма" width={100} height={100} />
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