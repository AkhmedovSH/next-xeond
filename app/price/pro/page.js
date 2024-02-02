import React from 'react'

import Request from '@components/Request';

function page() {

  return (
    <>
      <div className="container">
        <div>
          <div className="top_bg" />
          <div className="top_title">
            Pro Plan
          </div>
        </div>

        <div className="price_card second">
          <div className="row">
            <div className="col-md-6">
              <div className="price_card_row">Логотип</div>
              <div className="price_card_row">3 варианта + презинтация</div>
              <div className="price_card_row">Многостраничный сайт</div>
              <div className="price_card_row">12 креативов</div>
              <div className="price_card_row">Шапка профиля</div>
            </div>
            <div className="col-md-6">
              <div className="price_card_row">На выбор</div>
              <div className="price_card_row">Упаковка</div>
              <div className="price_card_row">Банера</div>
              <div className="price_card_row">Буклеты или листовки</div>
              <div className="price_card_row">Каталоги</div>
              <div className="price_card_row">+1 страница к сайту</div>
            </div>
          </div>
        </div>

        <div className="price_card second mb-50">
          <div className="title text-center">
            От 10 900 000 сум
          </div>
        </div>

        <Request defaultPrice="1" />
      </div>
    </>
  )
}

export default page