'use client'

import React, { useState } from 'react'

import Image from 'next/image'

function Request({ defaultType, defaultPrice }) {
    const botToken = '6836523730:AAF_OFdJa39ZaCD3Nra8GS7Z5LSg1DLRn9o'
    const chatId = "@xeond_requests"
    const API = `https://api.telegram.org/bot${botToken}/sendMessage`

    var colClassName = (defaultType || defaultPrice) ? 'col-lg-4' : 'col-lg-3'

    const services = [
        { value: '1', text: 'Графический дизайн', emoji: '🎨' },
        { value: '2', text: 'UX/UI дизайн', emoji: '📺' },
        { value: '3', text: 'Интерьер дизайн', emoji: '🏬' },
    ]

    const prices = [
        { value: '1', text: 'Terabyte', emoji: '🥇' },
        { value: '2', text: 'Gigabyte', emoji: '🥈' },
        { value: '3', text: 'Megabyte', emoji: '🥉' },
    ]

    const [showSuccess, setShowSuccess] = useState(false)

    const [sendData, setSendData] = useState({
        type: defaultType ? defaultType : '1',
        name: '',
        phoneNumber: '',
        error: '',
        showError: false,
    })

    async function sendRequest() {
        try {
            if (!sendData.name) {
                setSendData({ ...sendData, error: 'Заполните поле «Имя»', showError: true })
            }
            if (!sendData.phoneNumber) {
                setSendData({ ...sendData, error: 'Заполните поле «Телефон»', showError: true })
            }
            if (!sendData.phoneNumber || !sendData.name) {
                setTimeout(() => {
                    setSendData({ ...sendData, showError: false, error: 'Заполните поле' })
                }, 1500);
                return;
            }
            return;
            var copySendData = { ...sendData }

            var text = 'Новая заявка!🎉\n\n'
            if (defaultPrice) {
                var priceItem = prices.find(item => item.value === copySendData.type)
                text += 'Пакет:' + `*${priceItem?.text} ${priceItem?.emoji}*\n`;
            } else {
                var seriveItem = services.find(item => item.value === copySendData.type)
                text += 'Услуга:' + `*${seriveItem?.text} ${seriveItem?.emoji}*\n`;
            }
            text += 'Имя:' + `*${copySendData.name}*\n`
            text += 'Телефон:' + `*${copySendData.phoneNumber}*`
            const response = await fetch(API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    parse_mode: 'MarkDown',
                    text,
                }),
            })
            if (response.ok) {
                setShowSuccess(true)
                setTimeout(() => {
                    setShowSuccess(false)
                }, 1500);
                setSendData({ ...sendData, name: '', phoneNumber: '', })
            }
        } catch (e) {
            console.log(e);
        }
    }

    const handleInputChange = (e) => {
        const value = e.target.value;
        // Проверяем, содержит ли значение только числа и знак плюса, и не превышает ли 13 символов
        if (/^[0-9+]*$/.test(value) && value.length <= 13) {
            setSendData({ ...sendData, phoneNumber: e.target.value })
        }
    };

    return (
        <>
            <div className="row request_second">
                {!defaultType && !defaultPrice &&
                    <div className={colClassName}>
                        <select className="request_second_select" onChange={(e) => setSendData({ ...sendData, type: e.target.value })}>
                            {services.map((item, index) => (
                                <option value={item.value} key={index}>{item.text}</option>
                            ))}
                        </select>
                    </div>

                }
                <div className={colClassName}>
                    <input type="text" className="request_second_input" placeholder="Имя" value={sendData.name}
                        onChange={(e) => setSendData({ ...sendData, name: e.target.value })} />
                </div>
                <div className={colClassName}>
                    <input
                        type="number"
                        className="request_second_input"
                        placeholder="Номер телефона"
                        value={sendData.phoneNumber}
                        onChange={(e) => handleInputChange(e)} maxLength={13}
                    />
                </div>
                <div className={colClassName}>
                    <button className="request_second_btn" onClick={() => sendRequest()}>Оставить заявку</button>
                </div>
            </div>

            <div className={"toast " + (showSuccess ? 'active' : '')}>
                Успешно
                <Image src="/assets/images/check.png" alt="" height={30} width={30} quality={100} />
            </div>

            <div className={"toast error " + (sendData.showError ? 'active' : '')}>
                {/* <Image src="/assets/icons/times.svg" alt="" height={30} width={30} quality={100} /> */}
                Ошибка: {sendData.error}
            </div>
        </>
    )
}

export default Request