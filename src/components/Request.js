"use client";

import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'

function Request({ title, defaultActiveSelect = 1 }) {

  const [data, setData] = useState({
    first_name: '',
    second_name: '',
    company: '',
    phone: '+998 ',
    activeSelect: defaultActiveSelect,
  })

  const formatPhoneNumber = (value) => {
    // Убираем все, кроме цифр
    let numbers = value.replace(/\D/g, "");

    // Убираем +998, если пользователь пытается его стереть
    if (!numbers.startsWith("998")) {
      numbers = "998";
    }

    // Форматируем в +998 XX XXX XX XX
    let formatted = `+${numbers.slice(0, 3)}`;
    if (numbers.length > 3) formatted += ` ${numbers.slice(3, 5)}`;
    if (numbers.length > 5) formatted += ` ${numbers.slice(5, 8)}`;
    if (numbers.length > 8) formatted += ` ${numbers.slice(8, 10)}`;
    if (numbers.length > 10) formatted += ` ${numbers.slice(10, 12)}`;

    return formatted;
  };


  async function handleChange(e) {
    var dataCopy = { ...data }
    dataCopy[e.target.name] = e.target.name === 'phone' ? formatPhoneNumber(e.target.value) : e.target.value
    setData(dataCopy)
  }

  async function sendRequest() {
    const botToken = '6836523730:AAF_OFdJa39ZaCD3Nra8GS7Z5LSg1DLRn9o'
    const chatId = "@xeond_requests"
    const API = `https://api.telegram.org/bot${botToken}/sendMessage`

    try {
      if (!data.first_name) {
        setData({ ...data, error: 'Заполните поле «Имя»', showError: true })
      }
      if (!data.second_name) {
        setData({ ...data, error: 'Заполните поле «Имя»', showError: true })
      }
      if (!data.phone) {
        setData({ ...data, error: 'Заполните поле «Телефон»', showError: true })
      }
      if (!data.phone || !data.first_name) {
        setTimeout(() => {
          setData({ ...data, showError: false, error: 'Заполните поле' })
        }, 1500);
        return;
      }
      var copySendData = { ...data }

      var text = 'Новая заявка!🎉\n\n'
      if (defaultPrice) {
        var priceItem = prices.find(item => item.value === copySendData.type)
        text += 'Пакет:' + `*${priceItem?.text} ${priceItem?.emoji}*\n`;
      } else {
        var seriveItem = services.find(item => item.value === copySendData.type)
        text += 'Услуга:' + `*${seriveItem?.text} ${seriveItem?.emoji}*\n`;
      }
      text += 'Имя:' + `*${copySendData.first_name} ${copySendData.second_name}*\n`
      text += 'Компания:' + `*${copySendData.company}*`
      text += 'Телефон:' + `*${copySendData.phone}*`
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
        // setShowSuccess(true)
        // setTimeout(() => {
        //   setShowSuccess(false)
        // }, 1500);
        setData({ ...data, name: '', phone: '', })
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </Head>
      <section className="block_9">
        <div className="card">
          <div className="title">
            {title}
          </div>

          <button data-bs-toggle="modal" data-bs-target="#exampleModal" >
            <span>
              оставить заявку
            </span>

            <div className="star">
              <Image src="/icons/button_star.svg" alt="Звездочка" width={24} height={24} />
            </div>
          </button>
        </div>
      </section>

      <div className="modal fade layout" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">ЗАЯВКА</h5>

              <img src="/icons/close_circle.svg" alt="Иконка закрытия" data-bs-dismiss="modal" className="close-btn" width={48} height={48} />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="modal-input"
                placeholder="Имя"
                autoComplete="off"
                name="first_name"
                value={data.first_name}
                onChange={(e) => handleChange(e)}
              />

              <input
                type="text"
                className="modal-input"
                placeholder="Фамилия"
                autoComplete="off"
                name="second_name"
                value={data.second_name}
                onChange={(e) => handleChange(e)}
              />

              <input
                type="text"
                className="modal-input"
                placeholder="Компания"
                autoComplete="off"
                name="company"
                value={data.company}
                onChange={(e) => handleChange(e)}
              />

              <input
                type="text"
                className="modal-input"
                placeholder="+998"
                autoComplete="off"
                name="phone"
                value={data.phone}
                onChange={(e) => handleChange(e)}
              />

              <div className="modal-selects">
                <div className={`modal-select ${data.activeSelect === 1 ? 'active' : ''}`} onClick={() => setData({ ...data, activeSelect: 1 })}>
                  Графический <br />
                  дизайн
                </div>

                <div className={`modal-select ${data.activeSelect === 2 ? 'active' : ''}`} onClick={() => setData({ ...data, activeSelect: 2 })}>
                  UX/UI <br />
                  дизайн
                </div>

                <div className={`modal-select ${data.activeSelect === 3 ? 'active' : ''}`} onClick={() => setData({ ...data, activeSelect: 3 })}>
                  FRONTEND <br />
                  DEvelopment
                </div>

                <div className={`modal-select ${data.activeSelect === 4 ? 'active' : ''}`} onClick={() => setData({ ...data, activeSelect: 4 })}>
                  backend <br />
                  DEvelopment
                </div>
              </div>
            </div>

            <div className="modal-footer" onClick={() => sendRequest()}>
              <button type="button" className="button-primary">
                оставить заявку

                <div className="star">
                  <img src="./icons/button_star.svg" alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="modal-backdrop">
        <div className="modal">

        </div>
      </div> */}
    </>
  )
}

export default Request