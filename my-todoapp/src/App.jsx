import React from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './components/home';
import Edit from './components/edit';
import View from './components/view';
import CreateToDo from './components/Createtodo';
import EditToDo from './components/edittodo';
import ViewToDo from './components/viewtodo';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Signup from './components/Signup';


function App() {
  const navigate = useNavigate();

  return (
    <div className="">

      <header className="App-header">
       
      </header>

    
      <div class="navbar bg-sky-200 rounded-xl">
        <div class="flex-1">
          <Link to={"/"} className='btn btn-ghost normal-case text-xl hover:bg-blue-500 hover:text-white'>Home</Link>
          <Link to={"/createtodo"} className='btn btn-ghost normal-case text-xl hover:bg-blue-500 hover:text-white'>New Task</Link>
          
          <div className=' p-2 '>
          <Link to={"/dashboard"} className='btn btn-ghost normal-case text-xl hover:bg-blue-500 hover:text-white'>Dashboard</Link>

          <Link to={"/register"} className='btn btn-ghost normal-case text-xl hover:bg-blue-500 hover:text-white'>Register New User</Link>

          </div>

        </div>


        <div class="flex-none gap-2">
         
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="../IMG_2493.JPG" alt="User Avatar" />
              </div>
            </label>
            <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className=''>



        <Routes>



          <Route path='/' element={<Home />} />
          {/* <Route path='/create' element={<Create />} /> */}
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/view/:id' element={<View />} />



         
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />

        <Route path='/createtodo' element={<CreateToDo />} />
        <Route path='/edittodo/:id' element={<EditToDo />} />
        <Route path='/viewtodo/:id' element={<ViewToDo />} />

        </Routes>
      </div>

    </div>
  )
}

export default App;
