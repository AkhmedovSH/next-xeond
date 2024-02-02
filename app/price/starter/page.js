import React from 'react'

import Request from '@components/Request';

function page() {

  return (
    <>
      <div className="container">
        <div>
          <div className="top_bg" />
          <div className="top_title">
            Starter Plan
          </div>
        </div>

        <div className="price_card second">
          <div className="row">
            <div className="col-md-6">
              <div className="price_card_row">Обязанности</div>
              <div className="price_card_row">1 логотипа + презинтация</div>
              <div className="price_card_row">Шапка профиля</div>
              <div className="price_card_row">Креативы 8шт</div>
            </div>
            <div className="col-md-6">
              <div className="price_card_row">На выбор</div>
              <div className="price_card_row">Упаковка или Мерчи</div>
              <div className="price_card_row">Каталог</div>
              <div className="price_card_row">Банера</div>
              <div className="price_card_row">Буклеты или листовки</div>
            </div>
          </div>
        </div>

        <div className="price_card second mb-50">
          <div className="title text-center">
            От 3 900 000 сум
          </div>
        </div>

        <Request defaultPrice="3" />
      </div>
    </>
  )
}

export default page