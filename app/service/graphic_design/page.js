import React from 'react'

import Request from '@components/Request';

function page() {

  return (
    <>
      <div className="container">
        <div>
          <div className="top_bg" />
          <div className="top_title">
            Графический дизайн
          </div>
        </div>

        <div className="price_card second mb-50">
          <div className="row">
            <div className="col-md-6">
              <div className="price_card_row">Что делает графический дизайнер?</div>
              <div className="price_card_row">Презентации</div>
              <div className="price_card_row">Лэндинг + 1 страница</div>
              <div className="price_card_row">Упаковки товаров</div>
              <div className="price_card_row">Визуалы для соцсетей</div>
              <div className="price_card_row">Мерчи</div>
              <div className="price_card_row">Логотипы</div>
            </div>
            <div className="col-md-6">
              <div className="price_card_row">Каталоги, листовки, буклеты</div>
              <div className="price_card_row">Банера</div>
              <div className="price_card_row">Ребрендинг</div>
              <div className="price_card_row">Визитки</div>
            </div>
          </div>
        </div>

        <Request />

        <div className="">
          <div className="top_bg graphic_design" />
          <div className="top_title">
          Портфолио
          </div>
        </div>
      </div>
    </>
  )
}

export default page