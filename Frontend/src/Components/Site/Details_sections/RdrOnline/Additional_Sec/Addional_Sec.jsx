import React from 'react'
import "./Additional_Sec.css"
const Addional_Sec = ({item}) => {
  return (
    <div>
      <div className='rdr__additional__section'>
      <div className="custom-container rdr__additional__section__container">
        <div className="row">
        <div className="col-12">
          <div className="rdr__additional__section__img" >
          <img src={item.detailSecImg} className='mask-image' width={"80%"} alt="" />
          </div>
        </div>
        <div className="row generalRow">
          <div className="col-6">
            <div className="rdr__additional__section__text" >
              <h3>{item.detailSecTitle}</h3>
              <p className='details__des'>{item.detailSecDes}</p>
            </div>
          </div>x
        </div>
          
        </div>
        <div className="row">
        <div className="col-12">
          <div className="rdr__additional__section__img" >
          <img src={item.detailRdImg} width={"80%"} alt="" />
          </div>
        </div>
        <div className="row generalRow">
          <div className="col-6" >
            <div className="rdr__additional__section__text" >
              <h3>{item.detailRdTitle}</h3>
              <p className='details__des__end'>{item.detailRdDes}</p>
            </div>
          </div>
        </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Addional_Sec
