import React from 'react'
import "./Main_Sec.css"
import { Link } from 'react-router-dom'
const Main_Sec = ({item}) => {
  return (
    <div className='rdr__main__section'>
      <div className="custom-container rdr__main__section__container">
        <div className="row">
        <div className="col-12">
          <div className="rdr__main__section__img" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <img style={{width:"60%"}} src={item.detailsImg} alt="" />
          </div>
        </div>
        <div className="row generalRow">
          <div className="col-7">
            <div className="rdr__main__section__text" >
              <div className="rdr__main__section__text__about" >
                <Link to="/newswire" className='rdr__main__section__about__description'>
                Newswire
                </Link>
                <Link to={`/newswire/category/rdronline`} className='rdr__main__section__about__description'>
                {item.category}
                </Link>
                <Link to="/newswire/events" className='rdr__main__section__about__description__events'>
                Events
                </Link>
              </div>
              <h1 className='rdr__main__section__text__title'>{item.title}</h1>
              <h3>{item.detailsHeadDesc}</h3>
              <p className='time'>{item.time}</p>
              <p className='details__des'>{item.detailsMainDes}</p>
            </div>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default Main_Sec

