import { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocalStorage } from "./LocalStorage";
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useLocalStorage("user", null);
  // const navigate = useNavigate();
  const [token , settoken] = useState(null)
  const [user , setuser] = useState(null)
  const navigate = useNavigate()
  const LoginUser = async (data) => {
    data.preventDefault()
    let response =await fetch('http://127.0.0.1:8000/api/token/' , {
      method : 'POST' , 
      headers : {
        'Content-Type' : 'application/json'
      } , 
      body:JSON.stringify({'username' : data.target.username.value , 'password' : data.target.password.value})
    })
    let data1 = await response.json()
    if (response.status === 200){
      settoken(data1)
      setuser(jwt_decode(data1.access))
      localStorage.getItem('token' , JSON.stringify(data1))
      navigate('/')
    }
    else {
      alert('somthing went wrong')
    }
  };

  const logout = () => {
    setuser(null);
    navigate("/", { replace: true });
  };

  const value = {
    user : user , 
    LoginUser : LoginUser , 
    logout : logout
  }
  return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};