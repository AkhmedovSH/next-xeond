import Image from 'next/image'
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
              <Image src="/icons/button_star.svg" alt="Звездочка" width={24} height={24} />
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