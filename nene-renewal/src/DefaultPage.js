import React from 'react'

export default function DefaultPage(props) {
  return (
    <section className='default-page'>
        <h2>{props.tagName}</h2>
        <div className='renewal-page-img'>
            <figure>
                <img src="#" alt="리뉴얼페이지" />
            </figure>
        </div>
    </section>
  )
}
