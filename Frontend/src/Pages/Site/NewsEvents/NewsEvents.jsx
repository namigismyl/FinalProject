import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'
import Card from '../../../Components/Site/Sections/newswire_sec/Card/Card'
import "./NewsEvents.css"
const NewsEvents = () => {
    const {news}=useContext(MainContext)
  return (
    <div className='news__events'>
        <div className="custom-container">
            <div className="row">
        {
            news.slice(1).map((newsCard,index)=>{
                return (
                    <Card newsCard={newsCard} key={index}/>
                )
            })
        }

            </div>
            <div className="row">
                <div className="col-12">
                    <div className="viewMore__button morestories__btn">
                        <button>More Stories</button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default NewsEvents
