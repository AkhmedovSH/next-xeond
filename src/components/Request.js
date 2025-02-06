import React from 'react'

function Request({ title }) {
  return (
    <>
      <section className="block_9">
        <div className="card">
          <div className="title">
            {title}
          </div>

          <button>
            <span>
              оставить заявку
            </span>

            <div className="star">
              <img src="./icons/button_star.svg" alt="" />
            </div>
          </button>
        </div>
      </section>

      {/* <div className="modal-backdrop">
        <div className="modal">

        </div>
      </div> */}
    </>
  )
}

export default Request