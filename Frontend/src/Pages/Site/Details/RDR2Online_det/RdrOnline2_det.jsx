import React, { useEffect, useState } from 'react'
import Main_Sec from '../../../../Components/Site/Details_sections/RdrOnline/Main_Sec/Main_Sec'
import Addional_Sec from '../../../../Components/Site/Details_sections/RdrOnline/Additional_Sec/Addional_Sec'
import axios from 'axios'
import ESRB__Image from "../../../../assets/img/ESRB__Image.svg"
import { useParams } from 'react-router'
import "./RdrOnline2_det.css"
import {Link} from "react-router-dom"

const RdrOnline2_det = () => {
  const [item,setItem]= useState({})
  const {id}= useParams()
  useEffect(()=>{
    axios.get(`http://localhost:3000/newswire/${id}`).then(res=>{
      setItem(res.data)
    })
  },[id])
  return (
    <div className='rdr__online'>
      <Main_Sec item={item}/>
      <Addional_Sec item={item}/>
      <div className="esrb__section">
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
  )
}

export default RdrOnline2_det
