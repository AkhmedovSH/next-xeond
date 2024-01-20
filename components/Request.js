'use client'
import React, { useState } from 'react'

function Request() {
    const botToken = '6836523730:AAF_OFdJa39ZaCD3Nra8GS7Z5LSg1DLRn9o'
    const chatId = "@xeond_requests"
    const API = `https://api.telegram.org/bot${botToken}/sendMessage`

    const services = [
        { value: '1', text: 'Графический дизайн', emoji: '🎨' },
        { value: '2', text: 'UX/UI дизайн', emoji: '📺' },
        { value: '3', text: 'Интерьер дизайн', emoji: '🏬' },
    ]

    const [sendData, setSendData] = useState({
        type: '1',
        name: '',
        phoneNumber: '',
    })

    async function sendRequest() {
        console.log(111);
        try {
            var copySendData = { ...sendData }
            var seriveItem = services.find(item => item.value === copySendData.type)
            const text =
                `Новая заявка!🎉\n\nУслуга: <b>${seriveItem?.text} ${seriveItem?.emoji}</b>\nИмя: <b>${copySendData.name}</b>\nТелефон: <b><a href="https://t.me/${copySendData.phoneNumber}">${copySendData.phoneNumber}</a></b>`;
            const response = await fetch(API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    parse_mode: 'html',
                    text,
                }),
            })
            console.log(response);
            if (response.ok) {
                setSendData({
                    ...sendData,
                    name: '',
                    phoneNumber: '',
                })
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
                <div className="col-lg-3">
                    <select className="request_second_select" onChange={(e) => setSendData({ ...sendData, type: e.target.value })}>
                        {services.map((item, index) => (
                            <option value={item.value} key={index}>{item.text}</option>
                        ))}
                    </select>
                </div>
                <div className="col-lg-3">
                    <input type="text" className="request_second_input" placeholder="Имя"
                        onChange={(e) => setSendData({ ...sendData, name: e.target.value })} />
                </div>
                <div className="col-lg-3">
                    <input
                        type="number"
                        className="request_second_input"
                        placeholder="Номер телефона"
                        value={sendData.phoneNumber}
                        onChange={(e) => handleInputChange(e)} maxLength={13}
                    />
                </div>
                <div className="col-lg-3">
                    <button className="request_second_btn" onClick={() => sendRequest()}>Оставить заявку</button>
                </div>
            </div>
        </>
    )
}

export default Request