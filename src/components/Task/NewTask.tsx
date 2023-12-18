import Item from "./Item";
import { useState } from "react";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [status, setStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, dueDate, status });
    };

    return (
        <div className="flex flex-col">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    className="input mb-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    className="textarea mb-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="date"
                    className="input mb-2"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
                <div className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        className="checkbox mr-2"
                        value={status}
                        onChange={(e) => setStatus(e.target.checked)}
                    />
                    <span>Completed</span>
                </div>
                <button
                    type="submit"
                    className="btn bg-primary-blue hover:bg-blue-700 transition text-white"
                >
                    Add Task
                </button>
            </form>
        </div>
    );

export default NewTask;
