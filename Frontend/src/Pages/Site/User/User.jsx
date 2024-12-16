import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'
import "./User.css"
import controller from '../../../Services/api/requests'
import { endpoints } from '../../../Services/api/constants'
const User = () => {
  const navigate = useNavigate()
  const userLocal = JSON.parse(localStorage.getItem("user"))
  const data = useSelector((state)=>state.user)
  const [user,setUser]=useState({})
  
  useEffect(() => {
      if (!userLocal.id) {
        navigate('/')
      }
    }, [userLocal, navigate])
    useEffect(()=>{
      const token = Cookies.get('token')
      controller.getOne(endpoints.users,data.id,token).then((res)=>{
        setUser(res.data
        )
        console.log(res.data);
      })
    },[data])
  return (
  <div id='user'>
  <img src={user.src}   alt="" />
  <div className="user__person">
  <h1>{user.nickname}</h1>
  <h1>{user.email}</h1>
  </div>
    
  </div>

)
}

export default User