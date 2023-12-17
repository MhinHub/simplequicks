import { Select } from "flowbite-react";
import { useTaskStore } from "../../store";

const Head = () => {
  const { setSelectedTask } = useTaskStore();
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
      >
        New Task
      </button>
    </div>
  );
};

export default Head;
