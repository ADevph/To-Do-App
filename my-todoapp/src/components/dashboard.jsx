import { useState,useEffect } from "react";

import http from '../htttp'

import { Link } from "react-router-dom";
export default function Dashboard() {
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        fetchAllTasks();
    },[]);

    const fetchAllTasks = () => {
        http.get('/todos').then(res=>{
            setTasks(res.data);
           
        })
    }


    const deleteTask = (id) => {
        http.delete('/todos/'+id).then(res=>{
            fetchAllTasks();
        })
    }



    return (
        <div>
        <h1 className=" font-bold text-2xl p-2 m-4">All ToDo List </h1>
           <hr className=" font-extrabold p-2"/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task,index)=>(
                        <tr key={task.id}>
                            <td>{++index}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                            <Link className="btn btn-info" to={{ pathname: "/createtodo" }}>Create Task</Link>&nbsp;

                            <Link className="btn btn-info" to={{ pathname: `/edittodo/${task.id}`, state: { task } }}>Edit</Link>&nbsp;
                                <button type="button" className="btn btn-danger" onClick={()=>{deleteTask(task.id)}}
                                    >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}