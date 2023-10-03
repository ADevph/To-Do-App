import React, { useState, useEffect } from "react";
import http from '../htttp';
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get('/users')
      .then(res => {
        setUsers(res.data);
        setIsLoading(false); 
      })
      .catch(error => {
        console.error('Error loading users:', error);
        setIsLoading(false); 
      });
  }

  const deleteUser = (id) => {
    http.delete('/users/' + id)
      .then(res => {
        fetchAllUsers();
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  }

  return (
    <div>
      <h2 className=" font-bold text-2xl p-2 mt-4 mb-2 ">All Users List</h2>
<hr className="p-3 " />
     
      {isLoading && (
        <div className="text-center">
<span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>

        </div>
      )}

      {!isLoading && (
        <table className="table">
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{++index}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn bg-sky-400 hover:bg-blue-500 hover:text-white font-semibold " to={{ pathname: "/edit/" + user.id }}>Edit</Link>&nbsp;
                  <Link className="btn bg-blue-600 hover:bg-blue-500 hover:text-white font-semibold" to={{ pathname: "/view/" + user.id }}>View</Link>&nbsp;
                  <button type="button" className="btn bg-red-200 hover:bg-red-600 hover:text-white font-semibold"
                    onClick={() => { deleteUser(user.id) }}
                  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
