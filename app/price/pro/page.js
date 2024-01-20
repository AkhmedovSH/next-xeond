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
              <div className="price_card_row">Лэндинг</div>
              <div className="price_card_row">UI/UX</div>
              <div className="price_card_row">Другое (на выбор)</div>
            </div>
            <div className="col-md-6">
              <div className="price_card_row">Логотип</div>
              <div className="price_card_row">3 варианта + презинтация</div>
              <div className="price_card_row">Лэндинг</div>
              <div className="price_card_row">UI/UX</div>
              <div className="price_card_row">Другое (на выбор)</div>
            </div>
          </div>
        </div>

        <div className="price_card second mb-50">
          <div className="title text-center">
            От 9 900 000 сум
          </div>
        </div>

        <Request />
      </div>
    </>
  )
}

export default page