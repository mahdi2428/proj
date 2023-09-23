import React from "react";
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export default function PrivatePage(){
    let {user } = useAuth()
    let {logout} = useAuth()
    return(
        <>
            <div>
                This is Private Page
                <div>HomePage</div>
                {user && <h2>Hello {user.username}</h2>}
                {user && <button ><Link onClick={logout} to='/login'>Logout</Link></button>}
            </div>
        </>
    )
}