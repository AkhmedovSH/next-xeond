import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer">
                        <div className="footer_left">
                            <Image src="/assets/images/header_logo.svg" alt="" width={110} height={30} />
                            <span className="footer_text">2024</span>
                        </div>
                        <div className="footer_right">
                            <span className="footer_text">+(998) 90 932 49 39</span>
                            <Link href="tel:+998909324939" target="_blank">
                                <Image
                                    src="/assets/icons/footer_1.svg"
                                    alt=""
                                    width={48}
                                    height={48}
                                />
                            </Link>
                            <Link
                                href="https://instagram.com/xeond?igshid=OGQ5ZDc2ODk2ZA=="
                                target="_blank"
                            >
                                <Image
                                    src="/assets/icons/footer_2.svg"
                                    alt=""
                                    width={48}
                                    height={48}
                                />
                            </Link>
                            <Link href="https://t.me/Xe0nd" target="_blank">
                                <Image
                                    src="/assets/icons/footer_3.svg"
                                    alt=""
                                    width={48}
                                    height={48}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer