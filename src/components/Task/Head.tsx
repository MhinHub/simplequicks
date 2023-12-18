import { Select } from "flowbite-react";
import { useTaskStore } from "../../store";
import { ItemProps } from "./Item";

const Head = () => {
  const { setSelectedTask, addTask } = useTaskStore();

  const noData: ItemProps = {
    userId: "",
    title: "",
    date: new Date(),
    description: "",
    status: false,
  };

  return (
    <div className="flex justify-between items-center">
      <Select onChange={(e) => setSelectedTask(e.target.value)}>
        <option>My Tasks</option>
        <option>Personal Errands</option>
        <option>Urgent</option>
      </Select>
      <button
        type="button"
        className="btn bg-primary-blue hover:bg-blue-700 transition text-white"
        onClick={() => addTask(noData)}
      >
        New Task
      </button>
    </div>
  );
};

export default Head;
