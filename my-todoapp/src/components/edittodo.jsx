import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../htttp';

export default function EditToDo(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { id } = useParams(); 

    useEffect(() => {
        fetchTask(); 
    }, []);

    const fetchTask = () => {
        http.get(`/todos/${id}/edittodo`).then((res) => {
            setInputs({
                title: res.data.title,
                description: res.data.description,
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    }

    const submitForm = () => {
        http.put(`/todos/${id}`, inputs).then((res) => {
            navigate('/dashboard');
        });
    }

    return (
        <div>
            <h2>Edit Task</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <label>Task Title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control mb-2"
                            value={inputs.title || ''}
                            onChange={handleChange}
                        />
                        <label>Task Description</label>
                        <input
                            type="text"
                            name="description"
                            className="form-control mb-2"
                            value={inputs.description || ''}
                            onChange={handleChange}
                        />
                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
