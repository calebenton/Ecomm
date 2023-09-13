import React, {useContext, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "../Helpers/AuthContext"
//import {AdminContent} from "../Helpers/AdminContent"

function Login() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const isAdmin = []
    const {setAuthState} = useContext(AuthContext)
    //const {setAdminState} = useContext(AdminContent)


    let navigate = useNavigate()

    const Login = () => {
        const data = {userName: userName, password: password, isAdmin }
        axios.post("http://localhost:3002/auth/login", data).then((response) => {
        if (response.data.error) {
        alert(response.data.error)
        }else
        localStorage.setItem("accessToken", response.data)
        setAuthState(true)
        navigate("/")
        })
    }

  return (
    <div className='loginContainer'>
        <input placeholder='Username' type="text" onChange={(event) => {setUsername(event.target.value)}}/>
        <input placeholder='Password' type='password' onChange={(event) => {setPassword(event.target.value)}}/>
        <button onClick={Login}> Login </button>
    </div>
  )
}

export default Login