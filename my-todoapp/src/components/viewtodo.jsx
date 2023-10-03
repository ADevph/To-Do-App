import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../htttp";

export default function ViewToDo(props) {
    const [task, setTask] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchTask();
    }, []);

    const fetchTask = () => {
        http.get('/todos/'+id+'/edittodo').then((res) => {
            setTask({
                title: res.data.title,
                description: res.data.description,
            });
        });
    }

    return (
        <div>
            <h2>View Task</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <h4>Title</h4>
                        <p>{task.title}</p>
                        <h4>Description</h4>
                        <p>{task.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
