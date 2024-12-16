import React from 'react'
import "./RDR2__outlaws.css"
import ESRB__Image from "../../../../assets/img/ESRB__Image.svg"
import footer__png from "../../../../assets/img/RDR2__footer.png"
import { Link } from 'react-router-dom'
const RDR2__outlaws = () => {
  return (
    <section className='rdr2__outlaws'>
      <div className="rdr2__outlaws__back">
        <h1>Outlaws For Life</h1>
      </div>
      <div className="rdr2__footer__back">
        <img src={footer__png} alt="" />
        <h2>OUT NOW</h2>
        <div className="esrb__section rdr2__footer__esrb">
        <div className="esrb__section__about" >
                <div className="esrb__section__img">
                  <Link to="https://www.esrb.org/">
                  <img src={ESRB__Image} alt="" />

                  </Link>
                </div>
                <div className="esrb__section__text">
                  <p>Blood and Gore, Intense Violence, Mature Humor, Nudity, Strong Language, Strong Sexual Content, Use of Drugs and Alcohol</p>
                  <hr/>
                   <p className='esrb__interact'>In-Game Purchases,  Users Interact</p>
                </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default RDR2__outlaws
