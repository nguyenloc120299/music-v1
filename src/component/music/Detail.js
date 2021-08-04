import React from 'react'

const Detail = ({item}) => {
    return (
        <>
              <div className='img-detail'>
                                <img src={item.avatar} alt='' />
                            </div>

                            <div className='info-detail'>
                                <h4>{item.title}</h4>
                                <h5>{item.creator}</h5>
                            </div>
                            <div className='icon-detail'>
                                <i className="far fa-heart" />
                            </div>
        </>
    )
}

export default Detail
