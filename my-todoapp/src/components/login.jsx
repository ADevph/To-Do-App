// import { useState } from "react";
// import AuthUser from "./AuthUser";
// import http from "../htttp"; // Make sure your import path is correct

// export default function Login() {
//     const { setToken } = AuthUser(); // Remove 'http' from here
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     // const submitForm = () => {
//     //     http.post("/users", { email: email, password: password })
//     //         .then((res) => {
//     //             setToken(res.data.access_token, res.data.user);
//     //         })


//     const submitForm = () =>{
//         http.post('/users', { email: email, password: password })
//         .then((res)=>{
//             setToken(res.data.access_token, res.data.user);
//             navigate('/dashboard');
//         })
    


//             .catch((error) => {
//                 // Handle login error here, such as displaying an error message
//                 console.error("Login failed:", error);
//             });
//     }

//     return(
//         <div className="row justify-content-center pt-5">
//             <div className="col-sm-6">
//                 <div className="card p-4">
//                     <h1 className="text-center mb-3">Login </h1>
//                     <div className="form-group">
//                         <label>Email address:</label>
//                         <input type="email" className="form-control" placeholder="Enter email"
//                             onChange={e=>setEmail(e.target.value)}
//                         id="email" />
//                     </div>
//                     <div className="form-group mt-3">
//                         <label>Password:</label>
//                         <input type="password" className="form-control" placeholder="Enter password"
//                             onChange={e => setPassword(e.target.value)}
//                         id="pwd" />
//                     </div>
//                     <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/api/login', { email, password });
//       const token = response.data.token;

//       // Store the token in local storage
//       localStorage.setItem('token', token);

//       // Redirect to the dashboard or perform any other actions
//       // Example: window.location.href = '/dashboard';
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const signIn = () => {
    if (user.email === "") {
      alert("Email empty");
    } else if (user.password === "") {
      alert("Password empty");
    } else {
      axios.post("/login", user).then((response) => {
        setMsg(response.data);
        localStorage.setItem("Users", response.data);
        window.location.href = "/dashboard";
      });
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" method="POST" onSubmit={signIn}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={onInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={onInputChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
  
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
  
            <div className="text-sm">
              <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>
  
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>


          <p className="mt-4 text-center text-gray-700">
      New Here?
     <NavLink to='/register'
        className="ml-1 text-blue-500 hover:text-blue-700"
      >
       Signup
     </NavLink>
    </p>
        </form>
      </div>
    </div>
  );
  


}