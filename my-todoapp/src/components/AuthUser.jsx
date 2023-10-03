// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AuthUser(){
//     const navigate = useNavigate();

//     const getToken = () =>{
//         const tokenString = sessionStorage.getItem('token');
//         const userToken = JSON.parse(tokenString);
//         return userToken;
//     }

//     const getUser = () =>{
//         const userString = sessionStorage.getItem('user');
//         const user_detail = JSON.parse(userString);
//         return user_detail;
//     }



//     const [token,setToken] = useState(getToken());
//     const [user,setUser] = useState(getUser());

//     const saveToken = (user,token) =>{
//         sessionStorage.setItem('token',JSON.stringify(token));
//         sessionStorage.setItem('user',JSON.stringify(user));

//         setToken(token);
//         setUser(user);
//         navigate('/dashboard');
//     }

//     const logout = () => {
//         sessionStorage.clear();
//         navigate('/login');
//     }

//     const http = axios.create({
//         baseURL:"http://localhost:8000/api",
//         headers:{
//             "Content-type" : "application/json",
//             "Authorization" : `Bearer ${token}`
//         }
//     });
//     return {
//         setToken:saveToken,
//         token,
//         user,
//         getToken,
//         http,
//         logout
//     }
// }

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }

    const [token, setTokenState] = useState(getToken()); // Rename 'setToken' to 'setTokenState'
    const [user, setUserState] = useState(getUser());    // Rename 'setUser' to 'setUserState'

    const setToken = (token, user) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        setTokenState(token);
        setUserState(user);
        navigate('/dashboard');
    }

    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    const http = axios.create({
        baseURL: "http://localhost:8000/api",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return {
        setToken: setToken, // Return the 'setToken' function
        token: token,
        user: user,
        getToken: getToken,
        http: http,
        logout: logout
    }
}
