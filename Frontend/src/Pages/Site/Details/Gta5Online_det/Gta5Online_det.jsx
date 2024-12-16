import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import axios from 'axios'
import "./Gta5Online_det.css"
import Main_Sec from '../../../../Components/Site/Details_sections/Gta5Online/Main_Sec/Main_Sec'
import ESRB__Image from "../../../../assets/img/ESRB__Image.svg"
import Additional_Sec from '../../../../Components/Site/Details_sections/Gta5Online/Additional_Sec/Additional_Sec'
import { Link } from 'react-router-dom'
const Gta5Online_det = () => {
  const [item,setItem]=useState({})
  const {id} = useParams()
  useEffect(()=>{
    axios.get(`http://localhost:3000/newswire/${id}`).then(res=>{
      setItem(res.data)
    })
  },[id])
  return (
    
    <div className='gta5__online'>
      <Main_Sec item={item}/>
      <Additional_Sec item={item}/>
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

export default Gta5Online_det
